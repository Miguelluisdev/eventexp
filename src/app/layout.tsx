import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"
import { ptBR } from "@clerk/localizations";
import type { Metadata } from "next"
import { Edu_VIC_WA_NT_Beginner, Inter } from "next/font/google"
import "./globals.css"
const inter = Edu_VIC_WA_NT_Beginner({ subsets: ["latin"], weight: "500" })

export const metadata: Metadata = {
  title: {
    default: "EventExperience",
    template: "WebSite que organiza eventos",
  },
  description: "WebSite que organiza eventos",
  openGraph: {
    title: "EventExperience",
    description: "WebSite de Eventos",
    type: "website",
    locale: "pt-br",
    url: "http://localhost:3000",
    siteName: "EventExperience",
    images: ["/event1.png"],
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <head />
      <body className={inter.className}>
        <ClerkProvider localization={ptBR} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
