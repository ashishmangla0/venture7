import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import SkipToMain from '@/components/skiptomain/SkipToMain'
import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venture7® | AI Powered Technology Solutions Company',
  description: 'Venture7® is leading AI powered technology solutions company providing Product Engineering Services globally. Connect with us for Agile Software Development, Test Automation, Data Analytics and Chatbots.',
  manifest: '/manifest.json',
  themeColor: '#035c56',
  icons: [
    { rel: "icon", url: "/icons/128x128.png",sizes:'128x128'}
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkipToMain content={'Skip to main content'} sectionId={'main-content'} />
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
