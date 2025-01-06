import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { AlertCircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'flex items-center gap-2',
  {
    variants: {
      variant: {
        success: 'text-green-500',
        error: 'text-destructive',
        warning: 'text-muted',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
)

interface AlertProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof alertVariants> {}

export default function Alert({ variant, className, children, ...props }: AlertProps) {
  return (
    <p
      className={cn(alertVariants({
        variant,
        className,
      }))}
      {...props}
    >
      <AlertCircleIcon size={20} />
      {children}
    </p>
  )
}
