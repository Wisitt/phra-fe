import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import BookIcon from '@/components/icons/BookIcon'
import CameraIcon from '@/components/icons/CameraIcon'
import DerocateIcon from '@/components/icons/DerocateIcon'
import MessageChatSquareIcon from '@/components/icons/MessageChatSquareIcon'
import NewPaperIcon from '@/components/icons/NewPaperIcon'
import SearchTopicIcon from '@/components/icons/SearchTopicIcon'
import SienPhraIcon from '@/components/icons/SienPhraIcon'
import Headline from '@/components/shared/Headline'

import PopularPost from './PopularPost'

interface PopularPostProps {
  id: number
  title: string
  hashtags: string[]
  content: string
  likes: number
  comments: number
  imageUrl: string
}

interface TopicsBodyProps {
  selectedCategory: string
}

const topicIcons = [
  { id: 1, icon: <SearchTopicIcon />, content: 'กระทู้คำถาม' },
  { id: 2, icon: <MessageChatSquareIcon />, content: 'กระทู้สนทนา' },
  { id: 3, icon: <CameraIcon />, content: 'กระทู้สนทนา' },
  { id: 4, icon: <NewPaperIcon />, content: 'กระทู้ข่าว' },
  { id: 5, icon: <BookIcon />, content: 'กระทู้ให้ความรู้' },
  { id: 6, icon: <SienPhraIcon />, content: 'กระทู้จากเซียน' },
]

const mockPostsData: Record<string, PopularPostProps[]> = {
  กระทู้ที่ได้รับความนิยม: [
    { id: 1, title: 'ชื่อหัวข้อ 1', hashtags: ['Tag12133123123', 'Tag2'], content: 'เนื้อหา 1', likes: 12, comments: 4, imageUrl: 'https://picsum.photos/200/300' },
    { id: 2, title: 'ชื่อหัวข้อ 2', hashtags: ['Tag2'], content: 'เนื้อหา 2', likes: 15, comments: 6, imageUrl: 'https://picsum.photos/200/201' },
    { id: 3, title: 'ชื่อหัวข้อ 3', hashtags: ['Tag3'], content: 'เนื้อหา 3', likes: 15, comments: 6, imageUrl: 'https://picsum.photos/200/202' },
    { id: 4, title: 'ชื่อหัวข้อ 4', hashtags: ['Tag4'], content: 'เนื้อหา 4', likes: 15, comments: 6, imageUrl: 'https://picsum.photos/200/203' },
  ],
  กระทู้ใหม่ล่าสุด: [
    { id: 3, title: 'ชื่อหัวข้อ 3', hashtags: ['Tag3'], content: 'เนื้อหา 3', likes: 20, comments: 6, imageUrl: 'https://picsum.photos/200/302' },
    { id: 4, title: 'ชื่อหัวข้อ 4', hashtags: ['Tag4'], content: 'เนื้อหา 4', likes: 18, comments: 10, imageUrl: 'https://picsum.photos/200/303' },
  ],
  กระทู้ที่คุณติดตาม: [
    { id: 5, title: 'ชื่อหัวข้อ 5', hashtags: ['Tag5'], content: 'เนื้อหา 5', likes: 9, comments: 2, imageUrl: 'https://picsum.photos/200/304' },
  ],
}

export default function TopicsBody({ selectedCategory }: TopicsBodyProps) {
  const [allPostsByCategory, setAllPostsByCategory] = useState<Record<string, PopularPostProps[]>>({})
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set())
  const t = useTranslations('Common')

  useEffect(() => {
    if (selectedCategory === 'ทั้งหมด') {
      // รวมทุกโพสต์จากทุกหมวดหมู่
      setAllPostsByCategory(mockPostsData)
    }
    else if (mockPostsData[selectedCategory]) {
      // แสดงเฉพาะโพสต์ของหมวดหมู่ที่เลือก
      setAllPostsByCategory({ [selectedCategory]: mockPostsData[selectedCategory] })
    }
    else {
      // ไม่มีโพสต์ในหมวดหมู่นี้
      setAllPostsByCategory({})
    }
  }, [selectedCategory])

  const handleShowAll = (category: string) => {
    setExpandedCategories(prev => new Set(prev).add(category))
  }

  return (
    <div>
      <Headline className="mb-5">{t('category')}</Headline>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {topicIcons.map(topic => (
          <div key={topic.id}>
            <div className="flex size-[125px] items-center justify-center rounded-2xl border-4 border-[#d9c4ad] bg-[#ede3d8]">
              {topic.icon}
            </div>
            <div className="text-red mt-2 text-center">{topic.content}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 ">
        {Object.keys(allPostsByCategory).length > 0
          ? (
              Object.entries(allPostsByCategory).map(([category, posts]) => (
                <div key={category}>
                  <Headline className="mb-3 mt-5">{category}</Headline>
                  <div className="overflow-hidden rounded-3xl border-2 border-primary-200">
                    {posts.map((post, index) => (
                      <div key={post.id}>
                        <PopularPost {...post} showAllButton={selectedCategory === 'ทั้งหมด' && index === posts.length - 1} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex w-full items-center">
                    <DerocateIcon className="mr-2 text-[#CD9575]" />
                    <div className="flex-1 border-b-[3.5px] border-[#CD9575]"></div>
                    <DerocateIcon className="mx-4 text-[#CD9575]" />
                    <div className="flex-1 border-b-[3.5px] border-[#CD9575]"></div>
                    <DerocateIcon className="ml-2 text-[#CD9575]" />
                  </div>
                </div>
              ))
            )
          : (
              <div className="mt-20 text-3xl font-bold">{t('Topic.noPosts')}</div>
            )}
      </div>
    </div>
  )
}
