import ContactForm from './_components/contact-form'
import ContactInfo from './_components/contact-info'

export default function ContactPage() {
  return (
    <div className="min-h-[calc(100dvh-64px)] bg-wood-smoke-950 py-[100px]">
      <div className="container grid gap-16 lg:grid-cols-2 lg:gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
