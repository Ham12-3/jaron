"use client";

import { Workflow } from '@prisma/client';
import { ReactFlow } from '@xyflow/react';
import React from 'react'

function FlowEditor({workflow}: {workflow: Workflow}) {
  return (
    <main className='h-full w-full'>
<ReactFlow>
    
</ReactFlow>

    </main>
  )
}

export default FlowEditor