'use client'

import { useUser } from '@clerk/clerk-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import ThaiDecorationIcon from '@/components/icons/ThaiDecorationIcon'
import { Button, buttonVariants } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'

import AuthButtons from './AuthButtons'
import LanguageSelect from './LanguageSelect'
import ProfileMenus from './ProfileMenus'

export default function Header() {
  const t = useTranslations('Common')
  const { isSignedIn } = useUser()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const currentPath = usePathname()

  const menuItems = [
    { href: '/products', text: t('rent_sell') },
    { href: '/products/art/preview', text: t('art') },
    { href: '/products/auction', text: t('auctions') },
    { href: '/live', text: t('live') },
    { href: '/topics', text: t('topics') },
    { href: '/catalog', text: 'สารบัญพระ' },
  ]

  const isCurrentPath = (href: string) => currentPath === href

  return (
    <header className="sticky top-0 z-50 bg-background py-3 shadow-[0px_4px_4px_0px_#0000000A]">
      <div className="container flex gap-4">
        <Link
          href="/"
          className="grid w-[125px] place-content-center rounded-lg border border-primary"
        >
          SONG PHRA
        </Link>
        <Button aria-expanded={isMenuOpen} variant="outline" className="ml-auto inline-flex flex-col gap-1  2xl:hidden" onClick={() => setMenuOpen(prev => !prev)} size="icon">
          <div className={cn('h-0.5 w-[18px] rounded bg-current transition-transform', isMenuOpen && '-rotate-45 translate-y-1.5')} />
          <div className={cn('h-0.5 w-[18px] rounded bg-current transition-opacity', isMenuOpen && 'opacity-0')} />
          <div className={cn('h-0.5 w-[18px] rounded bg-current transition-transform', isMenuOpen && 'rotate-45 -translate-y-1.5')} />
        </Button>
        <div className={cn(
          'invisible bg-background 2xl:justify-between absolute flex-col-reverse 2xl:flex-row flex gap-4 left-0 2xl:border-none right-0 border-t top-full flex-1 border-b p-3 2xl:static 2xl:visible 2xl:border-b-0 2xl:p-0',
          isMenuOpen && 'visible',
        )}
        >
          <nav className="flex flex-wrap justify-center gap-1">
            {menuItems.map(({ href, text }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  buttonVariants({
                    className: 'group bg-transparent hover:border-primary border border-transparent text-foreground hover:bg-transparent',
                  }),
                  isCurrentPath(href) && '!bg-primary font-bold !text-primary-foreground',
                )}
              >
                <ThaiDecorationIcon
                  variant="8"
                  className={cn(
                    'text-primary opacity-0 transition-opacity group-hover:opacity-100',
                    isCurrentPath(href) && 'opacity-100 text-primary-foreground',
                  )}
                />
                {text}
                <ThaiDecorationIcon
                  variant="8"
                  className={cn(
                    'text-primary opacity-0 transition-opacity group-hover:opacity-100',
                    isCurrentPath(href) && 'opacity-100 text-primary-foreground',
                  )}
                />
              </Link>
            ))}
          </nav>
          <div className="flex justify-center gap-4">
            {isSignedIn ? <ProfileMenus /> : <AuthButtons />}
            <LanguageSelect />
          </div>
        </div>
      </div>
    </header>
  )
}
