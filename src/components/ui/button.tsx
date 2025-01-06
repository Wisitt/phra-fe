import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2 text-base ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        'default': 'bg-primary text-primary-foreground hover:bg-primary/90',
        'destructive': 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        'outline':
          'border border-primary bg-transparent text-primary hover:bg-primary/5',
        'outline-light': 'border border-primary-200 text-white hover:bg-primary-200/10',
        'outlineInverted':
          'border border-white bg-transparent text-white hover:bg-white hover:text-black',
        'outline-secondary':
          'border border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground',
        'secondary': 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'secondaryInverted':
          'bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80',
        'ghost': 'hover:bg-accent hover:text-accent-foreground',
        'ghostInverted': 'text-white hover:bg-accent hover:text-accent-foreground',
        'link': 'text-primary underline-offset-4 hover:underline',
        'input': 'w-full border border-input bg-background px-3 text-sm',
        'light': 'bg-primary-200 text-black hover:bg-primary-200/90',
        'lighter': 'bg-primary-100 text-black hover:bg-primary-100/90',
        'lightest': 'bg-primary-50 text-black hover:bg-primary-50/90',
        'white': 'bg-white text-black hover:bg-white/90',
        'outline-white': 'border border-white bg-transparent text-white',
      },
      size: {
        xss: 'h-7',
        xs: 'h-8 px-2 py-1',
        sm: 'h-9',
        default: 'h-10',
        lg: 'h-11 px-8',
        xl: 'h-12 px-8',
        iconXss: 'size-7 p-0',
        iconXs: 'size-8 p-0',
        iconSm: 'size-9 p-0',
        icon: 'size-10 p-0',
        iconLg: 'size-12 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
