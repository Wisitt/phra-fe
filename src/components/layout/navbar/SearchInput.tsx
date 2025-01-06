'use client'

import { SearchIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { type FormEvent, useEffect, useRef, useState } from 'react'

import { Input } from '@/components/ui/input'
import { useRouter } from '@/i18n/routing'

import FilterPopover from './FilterPopover'

interface SearchInputProps {
  onChange?: (value: string) => void
  pathname?: string
}

export default function SearchInput({ pathname = '' }: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewResults, setPreviewResults] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)

  const t = useTranslations('Common')
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = inputRef.current?.value || ''
    const updatedSearchParams = new URLSearchParams(searchParams.toString())
    updatedSearchParams.set('q', searchTerm)
    router.push({
      pathname,
      query: Object.fromEntries(updatedSearchParams),
    })
  }

  const q = searchParams.get('q') ?? ''

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = q
    }
  }, [q])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit({} as FormEvent<HTMLFormElement>)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleSubmit])

  return (
    <div className="relative z-10 mx-auto w-full max-w-[700px]">
      <form
        onSubmit={handleSubmit}
        className=" flex w-full rounded-full bg-wafer-900 p-1"
      >
        <div className="relative w-full">
          <Input
            ref={inputRef}
            defaultValue={q}
            className="rounded-full"
            placeholder={t('specify_search_term')}
            onChange={(e) => {
              const searchTerm = e.currentTarget.value
              const results = ['พระนางพญา', 'พระนางพญาหลังปั้ม', 'พระนางพญาหลวงพ่อกวย', 'พระนางพญาพิมพ์เข่าโค้ง', 'พระนางพญาหลวงพ่อโต๊ะ'].filter(item => item.includes(searchTerm))
              setPreviewResults(results)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <FilterPopover />
        </div>
        <button type="submit" className="flex items-center gap-2 px-6 text-white">
          {t('search')}
          <SearchIcon size={16} />
        </button>
      </form>
      {isFocused && previewResults.length > 0 && (
        <div className="absolute left-0 top-1/2 -z-10 w-full overflow-hidden rounded-b-3xl bg-white pt-[20px] shadow-[0_0_10px_0] shadow-[#B58763]/30">
          {previewResults.map(item => (
            <div key={item} className="px-6 py-2 hover:bg-primary-200">{item}</div>
          ))}
        </div>
      )}
    </div>
  )
}
