"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import NextTopLoader from "nextjs-toploader"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [queryClient] = React.useState(()=> new QueryClient())
  return (

    <QueryClientProvider client={queryClient}>
      <NextTopLoader color="#10b981" showSpinner={false} />
    <NextThemesProvider {...props}>{children}</NextThemesProvider>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}
