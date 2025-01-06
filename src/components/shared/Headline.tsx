import { forwardRef } from 'react'

import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { cn } from '@/lib/utils'

interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

const Headline = forwardRef<HTMLHeadingElement, HeadlineProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={cn('flex items-center gap-2 text-2xl font-bold', className)}
      >
        <ThaiDecorationIcon variant="20" />
        {children}
        <ThaiDecorationIcon variant="20" />
      </h2>
    )
  },
)
Headline.displayName = 'Headline'

export default Headline
