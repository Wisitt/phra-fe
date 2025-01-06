'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'

const topicSearch = ['กระทู้', 'กลุ่ม']

export default function TopicsSearch({ isOnDarkBackground }: { isOnDarkBackground?: boolean }) {
  const [activeTopic, setActiveTopic] = useState<string>(topicSearch[0])

  return (
    <Badge
      className="w-max rounded-full border-[2.3px] border-[#bd7859] p-0.5"
      variant={isOnDarkBackground ? 'outlineInverted' : 'outline'}
    >
      <div className="space-x-1">
        {topicSearch.map(t => (
          <Badge
            key={t}
            onClick={() => setActiveTopic(t)}
            className={`cursor-pointer rounded-full ${
              activeTopic === t ? 'bg-[#bd7859] text-white' : 'bg-transparent text-[#bd7859]'
            }`}
          >
            <span className="p-1">{t}</span>
          </Badge>
        ))}
      </div>
    </Badge>
  )
}
