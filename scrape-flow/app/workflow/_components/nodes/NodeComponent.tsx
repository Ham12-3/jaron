import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import NodeCard from "./NodeCard";
import NodeHeader from "./NodeHeader";
import { AppNodeData } from "@/types/appNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInput, NodeInputs } from "./NodeInputs";
import NodeOutputs, { NodeOutput } from "./NodeOutputs";



const NodeComponent = memo((props:NodeProps)=> {
const nodeData= props.data as AppNodeData

console.log(nodeData.type, "nodeData")
const task = TaskRegistry[nodeData.type]
console.log(task)

    return <NodeCard nodeId={props.id} isSelected={!!props.selected}>
        <NodeHeader taskType={nodeData.type} />
        <NodeInputs>
    {task.inputs.map((input)=> (
        <NodeInput key={input.name} input={input} nodeId={props.id}/>
    ))}
</NodeInputs>
<NodeOutputs>
    {task.outputs.map((output)=> (
        <NodeOutput key={output.name} output={output} />
    ))}
</NodeOutputs>

    </NodeCard>
})



export default NodeComponent


NodeComponent.displayName = 'NodeComponent'