import { Separator } from '@/components/ui/separator'
import CategoryQuestions from '@/features/help/components/CategoryQuestions'
import ContactUs from '@/features/help/components/ContactUs'
import Header from '@/features/help/components/Header'
import Sidebar from '@/features/help/components/Sidebar'

interface HelpCategoryProps {
  params: {
    categoryId: string
  }
}

export default function HelpCategory({ params }: HelpCategoryProps) {
  const { categoryId } = params

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1398px] py-[60px]">
        <div className="grid grid-cols-3 gap-20">
          <Sidebar categoryId={categoryId} />
          <CategoryQuestions categoryId={categoryId} />
        </div>
        <Separator className="my-[60px]" />
        <ContactUs />
      </main>
    </>
  )
}
