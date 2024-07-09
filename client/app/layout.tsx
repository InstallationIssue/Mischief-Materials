import './globals.css'
import { Roboto_Flex, Play, Smooch_Sans, Notable, Libre_Barcode_39_Text } from 'next/font/google'
import React from 'react'

const roboto = Roboto_Flex({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto'
})

const play = Play({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-play'
})

const notable = Notable({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-notable'
})

const libre = Libre_Barcode_39_Text({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-libre'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="en" className='h-full'>
        <body className={`flex flex-col h-full text-primary-dark dark:fill-primary-light dark:text-primary-light dark:bg-primary-dark ${roboto.variable} ${play.variable} ${notable.variable} ${libre.variable}`}>
          {children}
        </body>
      </html>
  )
}
