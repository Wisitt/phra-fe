import { cn } from '@/lib/utils'

import type { DecorativeSymbolIconProps } from '../icons/DecorativeSymbolIcon'
import DecorativeSymbolIcon from '../icons/DecorativeSymbolIcon'

interface HeadingProps {
  title: string
  iconSize?: number
  iconVariant: DecorativeSymbolIconProps['variant']
  iconClassName?: string
  className?: string
}

export default function Heading({ title, iconSize, iconVariant, iconClassName, className }: HeadingProps) {
  return (
    <h2 className={cn('flex items-center gap-2 text-2xl font-bold', className)}>
      <DecorativeSymbolIcon size={iconSize} variant={iconVariant} className={iconClassName} />
      {title}
      <DecorativeSymbolIcon size={iconSize} variant={iconVariant} className={iconClassName} />
    </h2>
  )
}
