'use client'

import { useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'

const POPULAR_QUERIES = ['พระนางพญา', 'พระปิดตา', 'พระกริ่ง']

interface TopSearchListProps {
  pathname?: string
  onDark?: boolean
}

export default function TopSearchList({ pathname = '', onDark }: TopSearchListProps) {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const isSelected = (query: string) => searchQuery === query

  const getButtonVariant = (query: string) => {
    if (isSelected(query))
      return 'secondary'
    return onDark ? 'outline-light' : 'outline-secondary'
  }

  const genQuery = (query: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (params.get('q') === query) {
      params.delete('q')
    }
    else {
      params.set('q', query)
    }
    return Object.fromEntries(params)
  }

  return (
    <div className="space-x-2">
      {POPULAR_QUERIES.map(query => (
        <Button
          key={query}
          className="rounded-full"
          variant={getButtonVariant(query)}
          asChild
        >
          <Link
            href={{
              pathname,
              query: genQuery(query),
            }}
          >
            {query}
          </Link>
        </Button>
      ))}
    </div>
  )
}
