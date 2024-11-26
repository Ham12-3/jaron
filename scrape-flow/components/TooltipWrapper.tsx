"use client"

import { Tooltip,

    TooltipContent,
    TooltipTrigger,
    TooltipProvider
 } from "./ui/tooltip"

 import React, { ReactNode } from 'react'
 

 interface Props {
    children: ReactNode;
    content: ReactNode;
    side?: "top" | "bottom" | "left" | "right";
 }
 function TooltipWrapper(props:Props) {
    if(!props.content) {
        return props.children
    }
 return (
    <TooltipProvider>

        <Tooltip>
            <TooltipTrigger asChild>
                {props.children}

            </TooltipTrigger>
            <TooltipContent side={props.side}>
{props.content}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
 )
 }
 
 export default TooltipWrapper