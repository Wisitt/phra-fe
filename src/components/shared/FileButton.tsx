import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const FileButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button> & {
    onChange: (file: File) => void
    accept?: string
  }
>(({ children, onChange, accept, ...props }, ref) => {
        const inputRef = React.useRef<HTMLInputElement>(null)

        const handleClick = () => {
          if (inputRef.current) {
            inputRef.current.value = ''
            inputRef.current.click()
          }
        }

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0]
          if (file)
            onChange(file)
        }

        return (
          <>
            <Button onClick={handleClick} type="button" {...props} ref={ref}>
              {children}
            </Button>
            <Input
              ref={inputRef}
              onChange={handleChange}
              className="hidden"
              type="file"
              accept={accept}
            />
          </>
        )
      })
FileButton.displayName = 'FileButton'
