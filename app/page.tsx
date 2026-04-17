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
}

export default function TokyoTiresLanding() {
  return (
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
  )
}
