import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Link } from '@/i18n/routing'

export default function AuthButtons() {
  const t = useTranslations('Common')

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost" asChild>
        <Link href="/login">{t('login')}</Link>
      </Button>
      <Separator orientation="vertical" />
      <Button asChild>
        <Link href="/register">{t('register')}</Link>
      </Button>
    </div>
  )
}
