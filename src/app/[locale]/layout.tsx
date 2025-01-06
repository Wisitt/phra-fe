import '@/global.css'

import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from 'sonner'

import Header from '@/components/layout/header/Header'
import ClerkProviderWrapper from '@/components/providers/ClerkProviderWrapper'
import LightboxProvider from '@/components/providers/LightboxProvider'
import QueryClientProvider from '@/components/providers/QueryClientProvider'
import { routing } from '@/i18n/routing'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const math = localFont({
  src: '../../../public/fonts/jsMath-cmbx10.woff',
  variable: '--font-math',
})

export const metadata: Metadata = {
  title: 'Song Phra',
  description: 'Song Phra',
}

interface AppLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function AppLayout({ children, params }: AppLayoutProps) {
  const { locale } = params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${notoSansThai.className} ${math.variable}`}
      suppressHydrationWarning
      dir="ltr"
    >
      <body className="bg-background text-foreground antialiased">
        <Toaster />
        <NuqsAdapter>
          <ClerkProviderWrapper>
            <NextIntlClientProvider messages={messages}>
              <ThemeProvider enableSystem={false} attribute="class">
                <QueryClientProvider>
                  <LightboxProvider />
                  <Header />
                  {children}
                </QueryClientProvider>
              </ThemeProvider>
            </NextIntlClientProvider>
          </ClerkProviderWrapper>
        </NuqsAdapter>
      </body>
    </html>
  )
}
