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
  keywords: [
    "Initiatives Foundation",
    "Education Nepal",
    "Transformative Education",
    "Social Enterprise Nepal",
    "Community Empowerment",
    "Innovation Nepal",
    "Social Entrepreneurship",
    "Nepal Education",
    "Educational Initiatives",
    "Youth Empowerment",
    "Sustainable Development Nepal",
    "Non-profit Nepal",
    "Philanthropy Nepal",
    "Volunteer Nepal",
    "Donate Nepal",
  ],
  openGraph: {
    title: "Initiatives Foundation - Transforming Education in Nepal",
    description:
      "A social enterprise and umbrella for transformative educational initiatives in Nepal, empowering communities through education, innovation, and social entrepreneurship.",
    url: "https://www.initiativesfoundation.org", // Replace with your actual website URL
    siteName: "Initiatives Foundation",
    images: [
      {
        url: "https://www.initiativesfoundation.org/images/logo-if.png", // Replace with your actual logo URL
        width: 800,
        height: 600,
        alt: "Initiatives Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiatives Foundation - Transforming Education in Nepal",
    description:
      "A social enterprise and umbrella for transformative educational initiatives in Nepal, empowering communities through education, innovation, and social entrepreneurship.",
    creator: "@initiativesfdn", // Replace with your Twitter handle
    images: ["https://www.initiativesfoundation.org/images/logo-if.png"], // Replace with your actual logo URL
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
      </head>
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
