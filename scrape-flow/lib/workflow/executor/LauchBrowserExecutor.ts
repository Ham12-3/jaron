import { waitFor } from "@/lib/helper/waitFor";
import { Environment } from "@/types/executor";
import puppeteeer from "puppeteer";

export async function LauchBrowserExecutor(environment:Environment): Promise<boolean> {
  try {

    console.log("@@ENV", environment)
    const browser = await puppeteeer.launch({
      headless: false,
    });

    await waitFor(3000);
    await browser.close();
    return true
  } catch (error) {
    console.error(error);
    return false;
  }
}
