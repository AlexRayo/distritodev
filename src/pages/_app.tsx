import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Nunito_Sans, Barlow } from '@next/font/google'

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['900', '700']
})

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['400', '500']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunitoSans.className, barlow.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
