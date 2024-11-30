import { GetPeriods } from '@/actions/analytics/getPeriods'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>HomePage</div>
  )
}


async function PeriodSelectorWrapper() {
  const periods= await GetPeriods()
  return <pre>{JSON.stringify(periods, null,4)}</pre>
}
export default HomePage