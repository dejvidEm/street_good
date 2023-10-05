import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Street Good',
  description: 'Fresh smoothies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-100`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
