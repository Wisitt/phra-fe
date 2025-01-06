import Footer from '@/components/layout/footer/Footer'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
