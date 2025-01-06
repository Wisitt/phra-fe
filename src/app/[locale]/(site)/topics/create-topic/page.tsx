'use client'

import { UploadIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import TopicsNavbar from '@/features/topics/components/TopicsNavbar'
import TopicTypes from '@/features/topics/components/TopicTypes'

const mockCategories = [
  'ทั้งหมด',
  'กระทู้ที่ได้รับความนิยม',
  'กระทู้ใหม่ล่าสุด',
  'กระทู้ที่คุณติดตาม',
]

export default function CreateTopic() {
  const t = useTranslations('Common')
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState(mockCategories[0])

  const handleCategoryClick = (category: string) => {
    router.push(`/th/topics/${encodeURIComponent(category)}`)
  }

  return (
    <>
      <TopicsNavbar />
      <div className="container grid grid-cols-1 gap-6 pb-10 pt-5 md:grid-cols-[280px_1fr] md:gap-[72px]">
        <TopicTypes
          categories={mockCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={(category) => {
            setSelectedCategory(category)
            handleCategoryClick(category)
          }}
        />
        <div className="container mx-auto p-4">
          <nav className="mb-5 flex items-center gap-2 text-sm text-gray-600">
            <button
              onClick={() => router.push('/th/topics')}
              className="text-blue-500 hover:underline"
            >
              {t('breadcrumb.home')}
            </button>
            <span className="text-gray-400">/</span>
            <span>{t('breadcrumb.create_topic')}</span>
          </nav>

          <form className="grid gap-6">
            <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 p-6">
              <UploadIcon size={48} className="text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">{t('Topic.upload_image')}</p>
            </div>

            <div>
              <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                {t('Topic.title_label')}
              </label>
              <Input id="title" placeholder={t('Topic.title_placeholder')} />
            </div>

            <div>
              <label htmlFor="content" className="mb-1 block text-sm font-medium text-gray-700">
                {t('Topic.content_label')}
              </label>
              <Textarea id="content" rows={6} placeholder={t('Topic.content_placeholder')} />
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                onChange={e => console.log(e.target.checked)}
              />
              <label>{t('Topic.pin_label')}</label>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => router.push('/th/topics')}>
                {t('Topic.cancel_button')}
              </Button>
              <Button>{t('Topic.submit_button')}</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
