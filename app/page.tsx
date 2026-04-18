import type { Metadata } from "next"
import { Navbar } from "@/components/tokyo-tires/navbar"
import { HeroSection } from "@/components/tokyo-tires/hero-section"
import { AboutSection } from "@/components/tokyo-tires/about-section"
import { CategoriesSection } from "@/components/tokyo-tires/categories-section"
import { FeaturesSection } from "@/components/tokyo-tires/features-section"
import { BrandImpactSection } from "@/components/tokyo-tires/brand-impact-section"
import { TestimonialsSection } from "@/components/tokyo-tires/testimonials-section"
import { CTASection } from "@/components/tokyo-tires/cta-section"
import { Footer } from "@/components/tokyo-tires/footer"

export const metadata: Metadata = {
  title: 'Tokyo Tires | Llantas de Alto Rendimiento para Motocicletas',
  description: 'Llantas de alto rendimiento para motocicletas con ingeniería de precisión japonesa. 60% caucho natural para máximo agarre. Distribuidor oficial en Colombia.',
  openGraph: {
    title: 'Tokyo Tires | Llantas de Alto Rendimiento para Motocicletas',
    description: 'Llantas de alto rendimiento para motocicletas con ingeniería de precisión japonesa. 60% caucho natural para máximo agarre.',
    url: 'https://tokyo-tires.com',
    siteName: 'Tokyo Tires',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tokyo Tires - Llantas de Alto Rendimiento',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  other: {
    'product:availability': 'https://schema.org/InStock',
    'product:price:currency': 'COP',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tokyo Tires',
  description: 'Llantas de alto rendimiento para motocicletas con ingeniería de precisión japonesa',
  url: 'https://tokyo-tires.com',
  logo: 'https://tokyo-tires.com/images/logo1.png',
  sameAs: [
    'https://www.facebook.com/share/1AqAwpNBhv/',
    'https://www.instagram.com/tokyotires.co',
    'https://wa.me/573125165270',
    'https://www.tiktok.com/@tokyotires.co',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-312-516-5270',
    contactType: 'customer service',
    availableLanguage: ['Spanish'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
    addressRegion: 'Santander',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  serviceType: 'Neumáticos para motorcycles',
  priceRange: '$$',
}

export default function TokyoTiresLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <FeaturesSection />
        <BrandImpactSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}
