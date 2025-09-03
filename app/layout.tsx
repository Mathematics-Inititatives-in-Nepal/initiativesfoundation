import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Initiatives Foundation - Transforming Education in Nepal",
  description:
    "A social enterprise and umbrella for transformative educational initiatives in Nepal, empowering communities through education, innovation, and social entrepreneurship.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased theme-transition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="initiatives-foundation-theme"
        >
          <Suspense fallback={null}>
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
