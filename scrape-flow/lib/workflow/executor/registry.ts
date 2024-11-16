
import { LauchBrowserExecutor } from "./LauchBrowserExecutor";

export const ExecutorRegistry ={
    LAUNCH_BROWSER: LauchBrowserExecutor,
    PAGE_TO_HTML: ()=> Promise.resolve(true),
    EXTRACT_TEXT_FROM_ELEMENT: ()=> Promise.resolve(true)
}