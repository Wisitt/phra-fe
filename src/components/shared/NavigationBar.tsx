import { ChevronLeft } from 'lucide-react'
import { Fragment } from 'react'

import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

interface NavigationBarItem {
  href?: string
  label: string
}

interface NavigationBarProps {
  returnHref?: string
  items: NavigationBarItem[]
  children?: React.ReactNode
}

export default function NavigationBar({ returnHref = '/', items, children }: NavigationBarProps) {
  return (
    <div className="flex grid-cols-12 items-center gap-4 py-5 xl:grid">
      <Link className="flex gap-2" href={returnHref}>
        <ChevronLeft />
        ย้อนกลับ
      </Link>
      <div className={cn('col-span-11 flex items-center', children && 'justify-between')}>
        <Breadcrumb>
          <BreadcrumbList>
            {items.map((item, index) => (
              <Fragment key={item.label}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {!item.href
                    ? (
                        <BreadcrumbPage>
                          {item.label}
                        </BreadcrumbPage>
                      )
                    : (
                        <BreadcrumbLink href={item.href}>
                          {item.label}
                        </BreadcrumbLink>
                      )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}
