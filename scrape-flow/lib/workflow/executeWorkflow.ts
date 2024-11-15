import "server-only"
import prisma from "../prisma"
import { revalidatePath } from "next/cache"

export async function ExecuteWorkflow(executionId: string) {
    const execution = await prisma.workflowExecution.findUnique({
        where: {id: executionId},
        include: {workflow: true, phases:true}
    })

    if(!execution) {
        throw new Error("execution not found")
    }

    // TODO: setup execution environment 

    const environment = {phases: {
        launchBrowser: {
            inputs: {
                wbesiteUrl : "www.google.com",

            },
            outputs: {
                browser: "PuppetterInstance"
            }
        }
    }}


    // TODO: initialize workflow execution 



    // TODO: initialize phases status 

    let executionFailed = false

    for(const phase of execution.phases) {
        // TODO: execute phase 
    }

    // TODO: finalize execution 


    // todo; Clean up environments 

    revalidatePath("/workflow/runs")
}