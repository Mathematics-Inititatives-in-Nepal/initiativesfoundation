import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Initiatives Foundation",
  description:
    "Get in touch with Initiatives Foundation. Contact us for volunteer opportunities, partnerships, program information, donations, or general inquiries. We'd love to hear from you!",
  keywords: [
    "Contact Initiatives Foundation",
    "Initiatives Foundation contact",
    "Volunteer Nepal",
    "Partnership opportunities Nepal",
    "Program inquiries",
    "Donate Nepal education",
    "Nepal NGO contact",
  ],
  openGraph: {
    title: "Contact Us - Initiatives Foundation",
    description:
      "Get in touch with Initiatives Foundation. Contact us for volunteer opportunities, partnerships, program information, donations, or general inquiries. We'd love to hear from you!",
    url: "https://www.initiativesfoundation.org/contact",
    images: [
      {
        url: "https://www.initiativesfoundation.org/images/logo-if.png",
        width: 800,
        height: 600,
        alt: "Initiatives Foundation Logo",
      },
    ],
    siteName: "Initiatives Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Initiatives Foundation",
    description:
      "Get in touch with Initiatives Foundation. Contact us for volunteer opportunities, partnerships, program information, donations, or general inquiries. We'd love to hear from you!",
    images: [
      "https://www.initiativesfoundation.org/images/logo-if.png",
    ],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}