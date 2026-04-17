"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function BrandImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id="quality"
      className="relative py-32 md:py-48 overflow-hidden bg-white text-[#0A0A0A]"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/Logovertical2.png"
          alt="Tokyo Tires Brand"
          fill className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </motion.div>

      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines opacity-20" />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D2D]/10 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Japanese Character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <motion.span 
            className="text-8xl md:text-9xl font-bold text-[#FF2D2D]/10 select-none"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 45, 45, 0.1)",
                "0 0 60px rgba(255, 45, 45, 0.3)",
                "0 0 20px rgba(255, 45, 45, 0.1)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            東京
          </motion.span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance text-[#0A0A0A]"
        >
          La Calidad
          <br />
          <motion.span 
            className="text-[#FF2D2D]"
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255, 45, 45, 0.4)",
                "0 0 30px rgba(255, 45, 45, 0.6)",
                "0 0 10px rgba(255, 45, 45, 0.4)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            No Es Una Opción
          </motion.span>
          <br />
          Es Nuestra Esencia
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty"
        >
          Diseño japonés, calidad superior. Neumáticos seleccionados 
          meticulosamente para motociclistas que exigen lo mejor.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "60%", label: "Caucho Natural" },
            { value: "100%", label: "Diseño Japonés" },
            { value: "2030", label: "Visión de Liderazgo" },
            { value: "98%", label: "Satisfacción" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center group"
            >
              <motion.div 
                className="font-display text-4xl md:text-5xl font-bold text-[#FF2D2D] mb-2"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255, 45, 45, 0.3)",
                    "0 0 25px rgba(255, 45, 45, 0.6)",
                    "0 0 10px rgba(255, 45, 45, 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 group-hover:text-[#0A0A0A] transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
