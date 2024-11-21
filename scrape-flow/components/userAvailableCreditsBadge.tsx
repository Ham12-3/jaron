"use client"

import { GetAvailableCredits } from '@/actions/billing/getAvailableCredits'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'

function UserAvailableCreditsBadge() {

const query = useQuery({
  queryKey: ["user-available-credits"],
  queryFn: GetAvailableCredits,
  refetchInterval: 30*1000,
})


  return <Link href={""}>
  
  </Link>
}

export default UserAvailableCreditsBadge