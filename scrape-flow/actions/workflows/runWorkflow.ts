"use server";

import prisma from "@/lib/prisma";
import { ExecuteWorkflow } from "@/lib/workflow/executeWorkflow";
import { FlowToExecutionPlan } from "@/lib/workflow/executionPlan";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { ExecutionPhaseStatus, WorkflowExecutionPlan, WorkflowExecutionStatus, WorkflowExecutionTrigger, WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";

export async function RunWorkflow(form: {
  workflowId: string;
  flowDefinition?: string;
}) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }

  const { workflowId, flowDefinition } = form;
  if (!workflowId) {
    throw new Error("workflowId is required");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      userId,
      id: workflowId,
    },
  });

  if (!workflow) {
    throw new Error("workflow not found");
  }

  let executionPlan: WorkflowExecutionPlan;
  if(workflow.status === WorkflowStatus.PUBLISHED) {
    if(!workflow.executionPlan) {
      throw new Error("no execution plan found  in published workflow")
    }
    executionPlan = JSON.parse(workflow.executionPlan!)
  } else {
    // workflow is a draft 
    if (!flowDefinition) {
      throw new Error("flow defintion is not defined");
    }
    const flow = JSON.parse(flowDefinition);

    const result = FlowToExecutionPlan(flow.nodes, flow.edges);
  
    if (result.error) {
      throw new Error("flow definition not valid");
    }
  
    if (!result.executionPlan) {
      throw new Error("No execution plan generated");
    }
  
    executionPlan = result.executionPlan;
  }




 

  const execution = await prisma.workflowExecution.create({
    data: {
      workflowId, // String, must match what your schema expects
      userId, // String, user ID associated with the workflow execution
      status: WorkflowExecutionStatus.PENDING, // Enum value for status
      startedAt: new Date(), // Date object, setting the started time
      trigger: WorkflowExecutionTrigger.MANUAL, // Enum value for trigger
      definition: flowDefinition,
      phases: {
        create: executionPlan.flatMap((phase) => {
          return phase.nodes.flatMap((node) => {
            return {
              userId, // String, must match what your schema expects
              status: ExecutionPhaseStatus.CREATED, // Enum value for phase status
              number: phase.phase, // Number, representing the phase order
              node: JSON.stringify(node), // JSON serialized string of the node
              name: TaskRegistry[node.data.type].label, // Name label derived from the registry
            };
          });
        }),
      },
    },
    select: {
      id: true,
      workflowId: true, // Include workflowId as specified in the `findMany` query
      userId: true, // Include userId
      trigger: true, // Include trigger
      status: true, // Include status
      createdAt: true, // Include createdAt
      startedAt: true, // Include startedAt
      completedAt: true, // Include completedAt
      phases: {
        select: {
          id: true, // Selecting only the ID field of phases
        },
      },
      workflow: true, // Include the workflow relation (if your schema supports it)
    },
  });
  

  if(!execution) {
    throw new Error("Workflow execution not created")
  }

  ExecuteWorkflow(execution.id)

  redirect(`/workflow/runs/${workflowId}/${execution.id}`)
}
