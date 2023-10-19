import './globals.css'

import Header from './components/Header'
import { Source_Sans_Pro } from 'next/font/google'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Nerdflix | Watch the top 50 best movies online',
  description: 'Watch blockbuster films online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>
        <Header />
        <main className='container mx-auto px-4 py-6'>
          {children}
        </main>
      </body>
    </html>
  )
}
