import { waitFor } from "@/lib/helper/waitFor";
import { ExecutionEnvironment } from "@/types/executor";


import { ClickElementTask } from "../task/ClickElement";
import { DeliverViaWebhookTask } from "../task/DeliverViaWebhook";

export async function DeliverViaWebhookExecutor(
  environment: ExecutionEnvironment<typeof DeliverViaWebhookTask>
): Promise<boolean> {
  try {
const targetUrl = environment.getInput("Target URL")
if(!targetUrl) {
  environment.log.error("input->targetUrl not defined")
}


const body = environment.getInput("Body")
if(!body) {
  environment.log.error("input->body not defined")
}




const response = await fetch(targetUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
