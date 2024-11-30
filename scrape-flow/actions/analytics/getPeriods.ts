"user server"

import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"


export async function GetPeriods() {
    const {userId} = auth()

    if(!userId) {
        throw new Error("unauthenticated")
    }

    const years =await prisma.workflowExecution.aggregate({
        where: {userId},
        _min: {startedAt:true}
    })

const currentYear = new Date().getFullYear()
    const minYear = years._min.startedAt
    ? years._min.startedAt.getFullYear():currentYear

const periods =[]

for(let i=minYear; i<=currentYear;i++) {

}
}