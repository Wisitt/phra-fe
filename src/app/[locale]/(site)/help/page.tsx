import Categories from '@/features/help/components/Categories'
import ContactUs from '@/features/help/components/ContactUs'
import FrequentQuestions from '@/features/help/components/FrequentQuestions'
import Header from '@/features/help/components/Header'

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[1114px] space-y-12 py-[60px]">
        <Categories />
        <FrequentQuestions />
        <ContactUs />
      </main>
    </>
  )
}
