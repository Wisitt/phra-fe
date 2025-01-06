'use client'

import { ChevronRight } from 'lucide-react'

import PopularTopic from './PopularTopics'

export interface PopularPostProps {
  id: number
  title: string
  hashtags: string[]
  content: string
  likes: number
  comments: number
  imageUrl: string
  showAllButton?: boolean
  onShowAll?: () => void
}

export default function PopularPost({
  title,
  hashtags,
  content,
  likes,
  comments,
  imageUrl,
  showAllButton = false,
  onShowAll,
}: PopularPostProps) {
  return (
    <div className="container m-0 p-0">
      <PopularTopic title={title} hashtags={hashtags} content={content} likes={likes} comments={comments} imageUrl={imageUrl} />
      {showAllButton && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={onShowAll}
            className="text-dark flex w-full items-center justify-center rounded-md rounded-t-none bg-[#d9c4ad] px-4 py-2"
          >
            <span>ดูทั้งหมด</span>
            <ChevronRight className="ml-1" />
          </button>
        </div>
      )}
    </div>
  )
}
