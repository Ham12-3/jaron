import { ExtractTextFromElementTask } from "./ExtractTextFromElement";
import { LaunchBrowserTask } from "./LaunchBrowser";
import { PagetoHtmlTask } from "./PageToHtml";

export const TaskRegistry ={
    LAUNCH_BROWSER: LaunchBrowserTask,
    PAGE_TO_HTML: PagetoHtmlTask,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
}


