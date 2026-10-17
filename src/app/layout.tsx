// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import Cursor from '@/components/ui/cursor'
import { IntroLoader } from '@/components/layout/intro-loader'
import { NoiseTexture } from '@/components/ui/noise-texture'
import { ScrollLine } from '@/components/ui/scroll-line'
import NextTopLoader from 'nextjs-toploader'
import { siteConfig } from '@/lib/site-config'
import './globals.css'
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAFAF8",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} / %s`,
  },
  description: 'A clinical approach to frontend architecture and data systems. Focused on clarity, structure, and functional logic.',
  keywords: ['Frontend Systems', 'Interface Architecture', 'Data Analytics', 'Swiss Rationalism', 'React', 'Next.js'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.title,
    description: 'Digital systems developed with clinical precision.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${siteConfig.name} / Digital Systems Archive` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} / Systems`,
    description: 'Frontend architecture and data-informed design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased bg-base text-primary cursor-none relative">
        <NextTopLoader
          color="var(--color-accent)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={2}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow={false}
        />

        {/* Atmosphere layer - grain + scroll line, fixed, non-interactive */}
        <NoiseTexture />
        <IntroLoader />
        <Cursor />
        <Header />

        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}