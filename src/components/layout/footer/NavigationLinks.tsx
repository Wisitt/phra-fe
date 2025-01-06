import { useTranslations } from 'next-intl'

import ThemeToggle from '@/components/layout/ThemeToggle'
import { Link } from '@/i18n/routing'

export default function NavigationLinks() {
  const t = useTranslations('Common')

  const navigationLinks = [
    {
      title: t('services'),
      links: [
        {
          text: t('rent_sell'),
          href: '/products',
        },
        {
          text: t('art'),
          href: '/products/art/preview',
        },
        {
          text: t('live'),
          href: '/live',
        },
        {
          text: t('auctions'),
          href: '/products/auction',
        },
      ],
    },
    {
      title: t('contact_us'),
      links: [
        {
          text: t('about_us'),
          href: '/about-us',
        },
        {
          text: t('contact_us'),
          href: '/contact',
        },
      ],
    },
    {
      title: t('news'),
      links: [
        {
          text: t('news'),
          href: '/news',
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-20">
      {navigationLinks.map(({ title, links }) => (
        <div className="flex flex-col gap-4" key={title}>
          <h3 className="text-center font-bold text-white md:text-left">{title}</h3>
          <ul className="space-y-4 text-center md:text-left">
            {links.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-white">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <ThemeToggle />
    </div>
  )
}
