'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import TopicsBody from '@/features/topics/components/TopicsBody'
import TopicsNavbar from '@/features/topics/components/TopicsNavbar'
import TopicTypes from '@/features/topics/components/TopicTypes'

const mockCategories = [
  'ทั้งหมด',
  'กระทู้ที่ได้รับความนิยม',
  'กระทู้ใหม่ล่าสุด',
  'กระทู้ที่คุณติดตาม',
]

export default function Topics() {
  const searchParams = useSearchParams()
  const categoryFromQuery = searchParams.get('category')
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery || mockCategories[0])

  useEffect(() => {
    if (categoryFromQuery) {
      setSelectedCategory(categoryFromQuery)
    }
  }, [categoryFromQuery])

  return (
    <>
      <TopicsNavbar />
      <div className="container grid grid-cols-1 gap-6 pb-10 pt-5 md:grid-cols-[280px_1fr] md:gap-[72px]">
        <TopicTypes
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="flex min-w-0 flex-col gap-10">
          <TopicsBody selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  )
}
