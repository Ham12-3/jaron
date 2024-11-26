import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, GlobeIcon, LucideProps, MousePointerClick, TextIcon } from "lucide-react";

export const ClickElementTask = {
  type: TaskType.CLICK_ELEMENT,
  label: "Click Element",
  icon: (props) => (
    <MousePointerClick className="stroke-rose-400" {...props} />
  ),

  isEntryPoint: false,
  credits: 2,
  inputs: [
    {
      name: "Html",
      type: TaskParamType.STRING,
      
      required: true,
      variant: "textarea"

    },
    {
      name: "Selector",
      type: TaskParamType.STRING,
      
      required: true,

    },
  ] as const,
  outputs: [
    {
        name: "Extracted text",
        type: TaskParamType.STRING
    },
 
  ] as const
} satisfies WorkflowTask
