import { Star } from 'lucide-react'
import React from 'react'

import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
}

export const StarRating = React.forwardRef<HTMLSpanElement, StarRatingProps>(
  ({ rating, ...props }, ref) => {
    const maxRating = 5

    return (
      <span className="flex gap-0.5" ref={ref} {...props}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star key={i} size={20} className={cn('*:stroke-primary', i < rating && '*:fill-primary')} />
        ))}
      </span>
    )
  },
)
StarRating.displayName = 'StarRating'
