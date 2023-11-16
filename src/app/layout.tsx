import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { cn } from '@/lib/utils'


import { ThemeProvider } from "@/components/theme/theme-provider"


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Respublika shoshilinch tez yordam ilmiy markaz Sirdaryo viloyat filiali',
  description: 'Respublika shoshilinch tez yordam ilmiy markaz Sirdaryo viloyat filiali, skoriy, ekstreniy',
  keywords: [
    'Respublika shoshilinch tez yordam ilmiy markaz Sirdaryo viloyat filiali', 'sogliqni saqlash', 'sirdaryo', 'tibbiyot', 'salomatlik', 'bolnitsa sirdaryo', 'bolnitsa', 'klinika', 'skoriy',
    'kasalliklar', 'viloyat', "ilmiy markaz", "shoshilinch yordam", "tez yordam", "shifoxona", "ekstreniy",

    'Республиканский научно-исследовательский центр неотложной медицинской помощи Сырдарьинский областной филиал', 'Здравоохранение', 'Сырдарья', 'Медицина', 'Здравоохранение', 'Сырдарьинская больница', 'Больница', 'Клиника',
    'болезни', 'область', 'научный центр', 'неотложная помощь', 'скорая помощь', 'больница', 'скорая помощь',

    "Republican Urgent Ambulance Research Center Syrdaryo Regional Branch", "healthcare", "Syrdarya", "medicine", "health", "Syrdarya hospital", "hospital", "clinic",
    'diseases', 'region', 'scientific centre', 'urgent care', 'ambulance', 'hospital', 'emergency',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontSans.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {children}

        </ThemeProvider>
      </body>
    </html>
  )
}
