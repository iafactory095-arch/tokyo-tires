import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Tokyo Tires | Llantas de Alto Rendimiento',
  description: 'Ingeniería de precisión japonesa para máximo agarre, durabilidad y control. Descubre las llantas Tokyo Tires diseñadas para el rendimiento.',
  keywords: ['llantas', 'neumáticos', 'alto rendimiento', 'Tokyo Tires', 'motocicletas', 'Colombia', 'llantas moto'],
  generator: 'v0.app',
  icons: {
    icon: '/images/logo1.png',
    apple: '/images/logo1.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A1A1A',
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
