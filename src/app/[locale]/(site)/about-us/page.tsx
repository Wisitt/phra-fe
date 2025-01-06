import { useTranslations } from 'next-intl'

export default function AboutUs() {
  const t = useTranslations('Common')

  return (
    <div>
      <h1 className="text-2xl">{t('about_us')}</h1>
    </div>
  )
}
