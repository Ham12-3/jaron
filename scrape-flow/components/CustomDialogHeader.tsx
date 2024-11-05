"use client"

import { LucideIcon } from "lucide-react";
import { DialogHeader, DialogTitle } from "./ui/dialog"


import React from 'react'
import { cn } from "@/lib/utils";

type Props = {
    title?: string;
    subTitle?: string;
    icon?:LucideIcon;
    iconClassName?:string;
    titleClassName?:string;
    subTitleClassName?:string;
}

const CustomDialogHeader = (props: Props) => {
 
  return (
   <DialogHeader className="py-6">
    <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
{props.icon && <props.icon size={30} className={cn("stroke-primary", props.iconClassName
)} />}

{props.title && (
    <p className={cn("tex-xl text-primary", props.titleClassName)}>
{props.title}
    </p>
)}


{props.subTitle && (
    <p className={cn("tex-xl text-primary", props.subTitleClassName)}>
{props.subTitle}
    </p>
)}
    
        </div>

    </DialogTitle>
   </DialogHeader>
  )
}

export default CustomDialogHeader