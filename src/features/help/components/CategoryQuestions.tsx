'use client'

import { ChevronRight } from 'lucide-react'

import { Link } from '@/i18n/routing'

import { HELP_GROUPS } from '../constants'

interface CategoryQuestionsProps {
  categoryId: string
}

export default function CategoryQuestions({ categoryId }: CategoryQuestionsProps) {
  const group = HELP_GROUPS.find(group => group.categories.some(category => category.id === Number(categoryId)))
  const category = group?.categories.find(category => category.id === Number(categoryId))

  if (!group || !category) {
    return null
  }

  return (
    <div className="col-span-2">
      <h2 className="mb-8 text-2xl font-bold">{category.name}</h2>
      <div className="flex flex-col">
        {category.articles.map(article => (
          <Link
            key={article.id}
            href={`/help/articles/${article.id}`}
            className="flex items-center justify-between border-b p-4 text-xl hover:bg-primary/5"
          >
            {article.name}
            <ChevronRight className="size-5" />
          </Link>
        ))}
      </div>
    </div>
  )
}
