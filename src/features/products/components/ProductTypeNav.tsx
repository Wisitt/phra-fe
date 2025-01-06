import DecorativeSymbolIcon from '@/components/icons/DecorativeSymbolIcon'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const PRODUCT_TYPES = [
  {
    id: 'occupy',
    label: 'ครอบครอง',
    href: '/products/new',
  },
  {
    id: 'rent-sell',
    label: 'เช่า/ปล่อย',
    href: '/products/rent-sell/new',
  },
  {
    id: 'auction',
    label: 'ประมูล',
    href: '/products/auction/new',
  },
] as const

interface ProductTypeNavProps {
  currentType: typeof PRODUCT_TYPES[number]['id']
}

export function ProductTypeNav({ currentType }: ProductTypeNavProps) {
  return (
    <div className="mb-6 flex gap-2 rounded-full bg-wood-smoke-950 p-1">
      {PRODUCT_TYPES.map(({ id, label, href }) => (
        <ProductTypeLink
          key={id}
          id={id}
          label={label}
          href={href}
          isActive={currentType === id}
        />
      ))}
    </div>
  )
}

function ProductTypeLink({ id, label, href, isActive }: { id: string, label: string, href: string, isActive: boolean }) {
  return (
    <Link
      key={id}
      href={href}
      className={cn(
        'flex-1 border border-transparent px-2 py-1.5 text-center',
        isActive
          ? 'relative rounded-full border-primary bg-gradient-to-br from-primary-300/80 to-primary-100/80 font-bold text-white'
          : 'text-white/50',
      )}
    >
      {isActive && (
        <>
          <DecorativeSymbolIcon
            className="absolute left-1 top-1/2 size-3 -translate-y-1/2 text-martini-950"
            variant="1"
          />
          <DecorativeSymbolIcon
            className="absolute right-1 top-1/2 size-3 -translate-y-1/2 text-martini-950"
            variant="1"
          />
        </>
      )}
      {label}
    </Link>
  )
}
