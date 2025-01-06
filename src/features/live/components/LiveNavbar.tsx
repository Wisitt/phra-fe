'use client'

import { Radio } from 'lucide-react'

import SearchInput from '@/components/layout/navbar/SearchInput'
import TopSearchList from '@/components/layout/navbar/TopSearchList'
import { Button } from '@/components/ui/button'
import { Link, useRouter } from '@/i18n/routing'

export default function LiveNavbar() {
  const router = useRouter()

  const handleChange = (value: string) => {
    router.push({
      pathname: '/live',
      query: { q: value },
    })
  }

  return (
    <div className="bg-primary-50 py-4">
      <nav className="container grid items-center gap-8 lg:grid-cols-[325px_1fr_auto]">
        <TopSearchList pathname="/live" />

        <SearchInput onChange={handleChange} />
        <Button className="w-[126px] rounded-full px-3" variant="light" asChild>
          <Link href="/live/new">
            เริ่มต้นไลฟ์
            {' '}
            <Radio />
          </Link>
        </Button>
      </nav>
    </div>
  )
}
