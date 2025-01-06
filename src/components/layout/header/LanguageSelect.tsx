'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { routing, usePathname, useRouter } from '@/i18n/routing'

const FLAG_ICONS = {
  th: '/flags/th.svg',
  en: '/flags/en.svg',
}

export default function LanguageSelect() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale })
  }

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-max">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map(localeOption => (
          <SelectItem key={localeOption} value={localeOption}>
            <div className="flex items-center gap-2">
              <Image width={24} height={14} src={FLAG_ICONS[localeOption]} alt={`${localeOption} flag`} />
              <span className="uppercase">{localeOption}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
