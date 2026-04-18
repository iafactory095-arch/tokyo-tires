import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL('https://tokyo-tires.com'),
  title: {
    default: 'Tokyo Tires | Llantas de Alto Rendimiento para Motocicletas',
    template: '%s | Tokyo Tires Colombia',
  },
  description: 'Llantas de alto rendimiento para motocicletas con ingeniería de precisión japonesa. 60% caucho natural para máximo agarre. Distribuidor oficial en Colombia.',
  keywords: ['llantas', 'neumáticos', 'alto rendimiento', 'Tokyo Tires', 'motocicletas', 'Colombia', 'llantas moto', 'neumáticos japoneses', 'llantas para moto', 'distribuidor llantas'],
  authors: [{ name: 'Tokyo Tires Colombia' }],
  creator: 'Tokyo Tires',
  publisher: 'Tokyo Tires',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadata: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://tokyo-tires.com',
    siteName: 'Tokyo Tires',
    title: 'Tokyo Tires | Llantas de Alto Rendimiento para Motocicletas',
    description: 'Llantas de alto rendimiento para motocicletas con ingeniería de precisión japonesa. 60% caucho natural para máximo agarre.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tokyo Tires - Llantas de Alto Rendimiento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokyo Tires | Llantas de Alto Rendimiento',
    description: 'Llantas de alto rendimiento con ingeniería japonesa. 60% caucho natural para máximo agarre.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tokyo-tires.com',
    languages: {
      'es-CO': 'https://tokyo-tires.com',
    },
  },
  category: 'business',
  classification: 'Neumáticos para motocicletas',
  icons: {
    icon: '/images/logo1.png',
    apple: '/images/logo1.png',
    shortcut: '/images/logo1.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_oswald.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
