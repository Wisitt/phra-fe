'use client'

import { SignInButton } from '@clerk/clerk-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function LoginWithSocial() {
  return (
    <>
      <div className="mb-[30px] flex items-center gap-4">
        <div className="h-px w-full rounded bg-muted" />
        <span className="text-muted">หรือ</span>
        <div className="h-px w-full rounded bg-muted" />
      </div>
      <SignInButton mode="modal">
        <Button variant="outline" size="xl" className="w-full rounded-full">
          <Image width={20} height={20} src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="" />
          {' '}
          เข้าสู่ระบบด้วย Google
        </Button>
      </SignInButton>
    </>
  )
}
