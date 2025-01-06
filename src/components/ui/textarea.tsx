import * as React from 'react'

import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, placeholder = '', ...props }, ref) => {
    if (label) {
      return (
        <div className="relative">
          <textarea
            className={cn(
              'flex min-h-[80px] w-full peer rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          <label className="pointer-events-none absolute left-2 top-0 -translate-y-1/2 bg-background px-1 text-xs text-muted transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:px-1 peer-focus:text-xs">
            {label}
          </label>
        </div>
      )
    }

    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
