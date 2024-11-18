import { waitFor } from "@/lib/helper/waitFor";
import { Environment, ExecutionEnvironment } from "@/types/executor";
import puppeteeer from "puppeteer";
import { LaunchBrowserTask } from "../task/LaunchBrowser";

export async function LauchBrowserExecutor(environment:ExecutionEnvironment<typeof LaunchBrowserTask >): Promise<boolean> {
  try {

    const websiteUrl = environment.getInput("Website Url")
    
    const browser = await puppeteeer.launch({
      headless: false,
    });
environment.setBrowser(browser)
    const page = await browser.newPage()
await page.goto(websiteUrl)

environment.setPage(page)
    return true
  } catch (error) {
    console.error(error);
    return false;
  }
}