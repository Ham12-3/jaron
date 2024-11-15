"use client"

import { Workflow } from '@prisma/client'
import React from 'react'
import {ReactFlowProvider} from '@xyflow/react'

import Topbar from '@/app/workflow/_components/topbar/Topbar'
import FlowEditor from './FlowEditor'
import TaskMenu from './TaskMenu'
import { FlowValidationContextProvider } from '@/components/context/FlowValidationContext'

function Editor({workflow}: {workflow: Workflow}) {
  return (
    <FlowValidationContextProvider>
<ReactFlowProvider>
    <div className='flex flex-col h-full overflow-hidden'>

        <Topbar title="Workflow editor" subTitle ={workflow.name} workflowId={workflow.id}/>
<section className='flex h-full overflow-auto'>
    <TaskMenu/>
<FlowEditor workflow={workflow} />
</section>
    </div>
    
  </ReactFlowProvider>
    </FlowValidationContextProvider>
  
  )
}

export default Editor