'use client'

import { QueryClient, QueryClientProvider as QueryClientProviderPrimitive } from '@tanstack/react-query'
import { useState } from 'react'

interface QueryClientProviderProps {
  children: React.ReactNode
}

export default function QueryClientProvider(props: QueryClientProviderProps) {
  const { children } = props
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProviderPrimitive client={queryClient}>{children}</QueryClientProviderPrimitive>
  )
}
