"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"

const carouselImages = [
  { src: "/images/carrusel1.png", alt: "Tokyo Tires Escenario 1" },
  { src: "/images/carrusel2.png", alt: "Tokyo Tires Escenario 2" },
  { src: "/images/carrusel3.png", alt: "Tokyo Tires Escenario 3" },
  { src: "/images/carrusel4.png", alt: "Tokyo Tires Escenario 4" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F5]"
    >
      {/* Background Carousel - Full screen */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImages[currentSlide].src}
              alt={carouselImages[currentSlide].alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Animated glowing orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />

      {/* Content overlay */}
      <motion.div style={{ y }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 md:pt-40 text-[#0A0A0A]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Full width on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-center lg:text-left bg-white/80 sm:bg-white/70 backdrop-blur-[10px] p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-[2.5rem] border border-white/30 shadow-2xl relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF2D2D]/10 border border-[#FF2D2D]/40 rounded-full sm:rounded-full text-xs sm:text-sm font-semibold text-[#FF2D2D] whitespace-nowrap">
                Llantas para Motocicletas - Calidad Japonesa
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-16 sm:h-20 md:h-24 lg:h-28 mb-6 sm:mb-8 w-full max-w-[220px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[450px] mx-auto lg:mx-0"
            >
              <Image
                src="/images/Logo_Horizontal.png"
                alt="Tokyo Tires"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-prose mx-auto lg:mx-0 leading-relaxed"
            >
              Neumáticos con diseño japonés de calidad superior. 60% de caucho natural 
              para máximo agarre y rendimiento en todas las condiciones.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#0A0A0A] hover:bg-black text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 shadow-lg transition-all w-full sm:w-auto"
                  asChild
                >
                  <a href="/catalogo tokyo (1).pdf" download="Catalogo_Tokyo_Tires_2026.pdf">Ver Catálogo</a>
                </Button>
              </motion.div>
              
              {/* Bloque de Contacto Dinámico - WhatsApp */}
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(37, 211, 102, 0)",
                    "0 0 0 10px rgba(37, 211, 102, 0.15)",
                    "0 0 0 0 rgba(37, 211, 102, 0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                  asChild
                >
                  <a href="https://wa.me/573125165270" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6" />
                    <span className="hidden sm:inline">Chatea con un asesor</span>
                    <span className="sm:hidden">Asesor</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Spacer for desktop - carousel is now background */}
          <div className="hidden lg:block" />
        </div>
      </motion.div>

      {/* Carousel navigation arrows - positioned at sides */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        aria-label="Ver imagen anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/40 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all hidden sm:flex"
      >
        <ChevronLeft size={24} />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        aria-label="Ver siguiente imagen"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/40 backdrop-blur-md border border-border rounded-full flex items-center justify-center text-white hover:border-primary hover:text-primary transition-all hidden sm:flex"
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Carousel indicators - positioned at bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8 neon-glow-sm"
                : "bg-white/50 hover:bg-white"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm font-medium">Descubre más</span>
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 rgba(220, 38, 38, 0)",
                "0 0 20px rgba(220, 38, 38, 0.5)",
                "0 0 0 rgba(220, 38, 38, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  )
}
