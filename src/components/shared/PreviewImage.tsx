import { Eye, X } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PreviewImageProps {
  images: File[]
  isDisabled?: boolean
  onClick?: () => void
  onView?: () => void
  onDelete?: () => void
  placeholder?: string
  compact?: boolean
}

export default function PreviewImage({
  images,
  isDisabled = false,
  onClick = () => {},
  onView = () => {},
  onDelete = () => {},
  placeholder = 'กรุณาอัปโหลดรูปภาพ',
  compact = false,
}: PreviewImageProps) {
  const isMultiple = images.length >= 2

  const handleClick = () => {
    if (isMultiple)
      onClick()
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        'relative grid h-full w-full place-content-center overflow-hidden rounded-2xl border-2 border-dashed border-muted-foreground text-muted-foreground',
        isMultiple && 'cursor-pointer',
      )}
    >
      {images.length >= 2 && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/25 text-4xl text-white">
          +
          {images.length - 1}
        </div>
      )}
      {images.length > 0 && (
        <div
          className={cn(
            'absolute top-0 z-10 flex w-full items-center justify-between p-4',
            compact && 'p-2',
          )}
        >
          {!isMultiple && (
            <>
              <Button
                type="button"
                disabled={isDisabled}
                onClick={onView}
                size={compact ? 'iconXs' : 'xs'}
                variant="secondary"
                className={cn(compact && 'rounded-full')}
              >
                {compact ? <Eye width={16} /> : 'ดูตัวอย่างรูปภาพ'}
              </Button>
              {!isDisabled && (
                <Button
                  type="button"
                  onClick={onDelete}
                  size="iconXs"
                  variant="secondary"
                  className="rounded-full"
                >
                  <X className="size-4" />
                </Button>
              )}
            </>
          )}
        </div>
      )}
      {images[0] && (
        <Image className="object-cover" src={URL.createObjectURL(images[0])} fill alt="" />
      )}
      {placeholder}
    </div>
  )
}
