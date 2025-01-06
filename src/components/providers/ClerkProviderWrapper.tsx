'use client'

import { ClerkProvider } from '@clerk/clerk-react'

import { env } from '@/lib/env'

interface ClerkProviderWrapperProps {
  children: React.ReactNode
}

export default function ClerkProviderWrapper({ children }: ClerkProviderWrapperProps) {
  return (
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  )
}
