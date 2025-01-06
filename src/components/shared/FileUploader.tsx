import type { ChangeEvent } from 'react'
import { useRef } from 'react'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface FileUploaderProps {
  text?: string
  className?: string
  isDisabled?: boolean
  onUpload: (file: File) => void
  hideIcon?: boolean
  children?: React.ReactNode
}

export default function FileUploader({
  onUpload,
  isDisabled = false,
  className,
  children,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0]
    if (!file)
      return
    onUpload(file)
  }

  return (
    <div
      onClick={() => {
        if (isDisabled)
          return
        inputRef.current?.click()
      }}
      className={cn(
        'flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/50 text-center text-primary/50',
        isDisabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <Input
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
        type="file"
        accept="image/*"
      />
      {children}
    </div>
  )
}
