'use client'

import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { Link } from '@/i18n/routing'

const mockResults = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `[ หัวข้อ ${i + 1} ] หัวข้อคำถาม <span style="color: #2E91AC">การ</span> หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม`,
}))

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [results, setResults] = useState<{ id: number, title: string }[]>([])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value
    setQuery(newQuery)

    setResults(
      newQuery
        ? mockResults.filter(result => result.title.includes(newQuery))
        : [],
    )
  }

  return (
    <div className="relative w-full max-w-[832px]">
      <Input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={query}
        onChange={handleSearch}
        placeholder="ระบุคำค้นหา"
        className="h-[60px] w-full rounded-full pr-[calc(126px+0.75rem)]"
      />
      <Button
        className="absolute inset-y-1 right-1 h-auto w-[126px] rounded-full bg-wafer-900 hover:bg-wafer-900/90"
      >
        ค้นหา
        <SearchIcon />
      </Button>
      {isFocused && query && (
        <Command className="absolute top-[calc(100%+0.5rem)] h-auto rounded-none shadow-[0_0_10px_0] shadow-[#B58763]/30">
          <CommandList>
            {results.length === 0 && (
              <CommandEmpty>ไม่พบผลลัพธ์</CommandEmpty>
            )}
            {results.length > 0 && (
              <CommandGroup className="p-4">
                {results.map(result => (
                  <CommandItem asChild key={result.id} className="cursor-pointer rounded-none px-4 py-2 hover:bg-primary-200">
                    <Link href={`/help/${result.id}`}>
                      <div className="truncate" dangerouslySetInnerHTML={{ __html: result.title }} />
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      )}
    </div>
  )
}
