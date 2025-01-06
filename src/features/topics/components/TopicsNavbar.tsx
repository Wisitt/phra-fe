import { User } from 'lucide-react'
import { useTranslations } from 'next-intl'

import TopicIcon from '@/components/icons/TopicIcon'
import SearchInput from '@/components/layout/navbar/SearchInput'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

import TopicsSearch from './TopicsSearch'

interface Props {
  isOnDarkBackground?: boolean
}

export default function TopicsNavbar({ isOnDarkBackground }: Props) {
  const t = useTranslations('Common')

  return (
    <nav className="container grid items-center py-4 xl:grid-cols-[352px_72px_1fr_1rem_auto]">
      <TopicsSearch isOnDarkBackground={isOnDarkBackground} />
      <div />
      <SearchInput />
      <div />
      <div className="flex w-full flex-wrap gap-2 sm:w-auto">
        {/* My Topics */}
        <Button className="w-full rounded-full sm:w-auto" variant="lightest" asChild>
          <Link href="/topics" className="flex items-center space-x-2">
            <span>{t('Topic.my_topics')}</span>
            <User />
          </Link>
        </Button>

        {/* Create Topic */}
        <Button className="w-full rounded-full sm:w-auto" variant="lightest" asChild>
          <Link href="/topics/create-topic" className="flex items-center space-x-2">
            <span>{t('Topic.create_topic')}</span>
            <TopicIcon />
          </Link>
        </Button>
      </div>
    </nav>
  )
}
