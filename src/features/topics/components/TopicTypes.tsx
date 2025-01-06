// TopicTypes.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TopicTypesProps {
  categories?: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function TopicTypes({ categories = [], selectedCategory, onCategoryChange }: TopicTypesProps) {
  return (
    <Card className="h-auto max-h-[500px] overflow-y-auto border-2 border-primary-200">
      <CardHeader className="sticky top-0 flex-row items-center gap-2 bg-primary-200 px-2 pb-2 pt-3">
        <CardTitle className="flex-1 text-center font-normal ">แท็กที่เป็นที่นิยม</CardTitle>
      </CardHeader>
      <CardContent className="flex-row justify-center">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(category)}
            className={cn(
              'flex w-full cursor-pointer items-center justify-between px-2 py-1 hover:bg-primary-100 rounded-2xl mt-1 mb-1',
              selectedCategory === category && '!bg-primary-200 border px-2 py-1 rounded-2xl mt-1 mb-1',
            )}
          >
            <span className="flex-1 p-1 text-center">{category}</span>
          </button>
        ))}
      </CardContent>
    </Card>
  )
}
