import { ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import FlowerFillIcon from '@/components/icons/FlowerFillIcon'
import FlowerOutlineIcon from '@/components/icons/FlowerOutlineIcon'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children: React.ReactNode
  href?: string
  isDarkBg?: boolean
  patternPercent?: number
}

export default function Title({ className, children, href, isDarkBg, patternPercent = 85 }: Props) {
  const t = useTranslations('Common')

  return (
    // TODO: delete container
    <div className={cn('container flex py-6', className)}>
      <div className="flex flex-1 justify-end">
        <div
          style={{
            width: `${patternPercent}%`,
          }}
          className="relative h-full"
        >
          <div className="absolute right-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary" />
          <FlowerOutlineIcon className="absolute right-[calc(100%-1.5px)] top-1/2 translate-y-[calc(-50%+0.5px)]" />
          <FlowerFillIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <FlowerOutlineIcon className="absolute left-[calc(100%-1.5px)] top-1/2 translate-y-[calc(-50%+0.5px)]" />
        </div>
      </div>
      <h2
        className={cn(
          'w-[calc(180px+29px*2)] text-center text-2xl font-bold',
          isDarkBg && 'text-white',
        )}
      >
        {children}
      </h2>
      <div className="flex flex-1 justify-start">
        <div
          style={{
            width: `${patternPercent}%`,
          }}
          className="relative h-full"
        >
          <div className="absolute right-0 top-1/2 h-px w-full -translate-y-1/2 bg-primary" />
          <FlowerOutlineIcon className="absolute right-[calc(100%-1.5px)] top-1/2 translate-y-[calc(-50%+0.5px)]" />
          <FlowerFillIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          {!href && (
            <FlowerOutlineIcon className="absolute left-[calc(100%-1.5px)] top-1/2 translate-y-[calc(-50%+0.5px)]" />
          )}
        </div>
        {href && (
          <Button className={cn(isDarkBg && 'text-white')} size="sm" variant="ghost" asChild>
            <Link href={href}>
              {t('see_more')}
              <ChevronRight className="ml-2 size-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
