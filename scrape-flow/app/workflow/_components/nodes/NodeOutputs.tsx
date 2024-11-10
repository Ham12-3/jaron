"use client"

import { TaskParam } from '@/types/task'
import React from 'react'

function NodeOutputs({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col divide-y gap-1'>
        {children}

    </div>
  )
}



export function NodeOutput({output}:{output: TaskParam}) {
    return <div className='flex justify-end relative p-3 bg-secondary'>
        {output.name}
    </div>
}

export default NodeOutputs