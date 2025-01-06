import { Separator } from '@/components/ui/separator'
import ContactUs from '@/features/help/components/ContactUs'
import Content from '@/features/help/components/Content'
import Header from '@/features/help/components/Header'
import Sidebar from '@/features/help/components/Sidebar'
import { HELP_GROUPS } from '@/features/help/constants'

interface HelpArticleProps {
  params: {
    articleId: string
  }
}

export default function HelpArticle({ params }: HelpArticleProps) {
  const { articleId } = params
  const group = HELP_GROUPS.find(group =>
    group.categories.some(category =>
      category.articles.some(article => article.id === Number(articleId)),
    ),
  )
  const categoryId = group?.categories.find(category =>
    category.articles.some(article => article.id === Number(articleId)),
  )?.id.toString()

  if (!categoryId)
    return null

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1398px] py-[60px]">
        <div className="grid grid-cols-3 gap-20">
          <Sidebar categoryId={categoryId} />
          <Content />
        </div>
        <Separator className="my-[60px]" />
        <ContactUs />
      </main>
    </>
  )
}
