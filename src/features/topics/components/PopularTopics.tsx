// PopularTopics.js
'use client'

import { HeartIcon, MessageSquareText } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PopularTopicProps {
  title: string
  hashtags: string[]
  content: string
  likes: number
  comments: number
  imageUrl: string
}

export default function PopularTopic({ title, hashtags, content, likes, comments, imageUrl }: PopularTopicProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleToggleLikeClick = (e: MouseEvent) => {
    e.preventDefault()
    setIsLiked(prev => !prev)
  }

  return (
    <div className="m-5 mb-4 flex rounded-lg border bg-white p-4 shadow-lg">
      <img src={imageUrl} alt={title} className="mr-4 size-[113px] rounded-md object-cover" />
      <div className="flex-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mb-3 mt-2 flex items-center gap-1 text-gray-500">
          {hashtags.map((tag, index) => (
            <span key={index} className="inline-block rounded-full border border-gray-500 px-3 py-1 text-sm">{tag}</span>
          ))}
        </div>
        <div className="flex-1 border-b-[3.5px] border-[#CD9575]"></div>
        <p className="mt-2 text-gray-700">{content}</p>
        <div className="mt-4 flex items-center">
          <Button onClick={handleToggleLikeClick} variant="secondaryInverted" size="iconSm" className="rounded-full bg-transparent">
            <HeartIcon className={cn('transition-all duration-300', isLiked ? 'fill-red-500 stroke-red-500' : 'fill-transparent')} />
          </Button>
          <span className="mr-1 text-gray-500">{likes}</span>
          <Button variant="secondaryInverted" size="iconSm" className="rounded-full bg-transparent">
            <MessageSquareText className="fill-transparent stroke-current" />
          </Button>
          <span className="text-gray-500">{comments}</span>
        </div>
      </div>
    </div>
  )
}
