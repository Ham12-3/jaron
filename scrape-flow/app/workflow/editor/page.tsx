import { auth } from '@clerk/nextjs/server'
import React from 'react'

function page({params}:{params: {workflowId: string}}) {

    const workflowId = params.workflowId

    const {userId} = auth()
    if(!userId) {
        return <div>
            Unauthenticated
        </div>
    }
  return (
    <div>page</div>
  )
}

export default page