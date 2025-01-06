import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const BUDDHIST_TYPES = [
  {
    id: 'occupy',
    label: 'ครอบครอง',
    href: '/products/art/new',
  },
  {
    id: 'ready-to-worship',
    label: 'พร้อมบูชา',
    href: '/products/art/ready-to-worship/new',
  },
  {
    id: 'new-booking',
    label: 'เปิดจองใหม่',
    href: '/products/art/new-booking/new',
  },
] as const

interface TypeNavProps {
  currentType: typeof BUDDHIST_TYPES[number]['id']
}

export function TypeNav({ currentType }: TypeNavProps) {
  return (
    <div className="mb-6 flex gap-2 rounded-full bg-wood-smoke-950 p-1">
      {BUDDHIST_TYPES.map(({ id, label, href }) => (
        <TypeNavItem
          key={id}
          id={id}
          label={label}
          href={href}
          isCurrentType={currentType === id}
        />
      ))}
    </div>
  )
}

function TypeNavItem({ id, label, href, isCurrentType }: { id: string, label: string, href: string, isCurrentType: boolean }) {
  return (
    <Link
      key={id}
      href={href}
      className={cn(
        'flex-1 border border-transparent px-2 py-1.5 text-center',
        isCurrentType
          ? 'relative rounded-full border-primary bg-gradient-to-br from-primary-300/80 to-primary-100/80 font-bold text-white'
          : 'text-white/50',
      )}
    >
      {isCurrentType && (
        <>
          <DecorativeSymbolIcon
            key="left-icon"
            className="absolute left-1 top-1/2 size-3 -translate-y-1/2 text-martini-950"
            variant="1"
          />
          <DecorativeSymbolIcon
            key="right-icon"
            className="absolute right-1 top-1/2 size-3 -translate-y-1/2 text-martini-950"
            variant="1"
          />
        </>
      )}
      {label}
    </Link>
  )
}
