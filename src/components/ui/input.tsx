import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, placeholder = '', ...props }, ref) => {
    if (label) {
      return (
        <div className="relative">
          <input
            className={cn(
              'flex h-10 w-full peer rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className,
            )}
            ref={ref}
            placeholder={placeholder}
            {...props}
          />
          <label className="pointer-events-none absolute left-2 top-0 -translate-y-1/2 bg-background px-1 text-xs text-muted transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:px-1 peer-focus:text-xs">
            {label}
          </label>
        </div>
      )
    }

    return (
      <input
        className={cn(
          'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
