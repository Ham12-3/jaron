import { waitFor } from "@/lib/helper/waitFor";
import { ExecutionEnvironment } from "@/types/executor";

import { LaunchBrowserTask } from "../task/LaunchBrowser";
import { PagetoHtmlTask } from "../task/PageToHtml";

export async function PageToHtmlExecutor(
  environment: ExecutionEnvironment<typeof PagetoHtmlTask>
): Promise<boolean> {
  try {
    const html = await environment.getPage()!.content();

    environment.setOutput("Html", html);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
