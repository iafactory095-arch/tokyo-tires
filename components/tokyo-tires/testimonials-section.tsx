"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, ShieldCheck, Award, ThumbsUp } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Piloto de Competición",
    content:
      "Las Tokyo Racing Pro me han dado la confianza para atacar cada curva en pista. El agarre es simplemente excepcional, incluso bajo condiciones extremas.",
    rating: 5,
    avatar: "CM",
  },
  {
    name: "María Fernández",
    role: "Motociclista Urbana",
    content:
      "Cambié a Tokyo Street y la diferencia es impresionante. Silenciosas en carretera y excelente tracción tanto en seco como en mojado.",
    rating: 5,
    avatar: "MF",
  },
  {
    name: "Roberto Silva",
    role: "Aventurero Off-Road",
    content:
      "Después de miles de kilómetros en terrenos difíciles, mis Tokyo Adventure siguen respondiendo perfectamente. La mejor inversión para mi moto.",
    rating: 5,
    avatar: "RS",
  },
]

const trustBadges = [
  { icon: ShieldCheck, label: "Garantía de 3 Años" },
  { icon: Award, label: "Diseño Japonés" },
  { icon: ThumbsUp, label: "98% Recomendado" },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#FF2D2D] font-bold text-sm uppercase tracking-wider"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(255, 45, 45, 0.2)",
                "0 0 10px rgba(255, 45, 45, 0.4)",
                "0 0 5px rgba(255, 45, 45, 0.2)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Testimonios
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance text-white">
            Lo Que Dicen{" "}
            <span className="text-[#FF2D2D]">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Miles de motociclistas confían en Tokyo Tires. Aquí hay algunas de sus experiencias.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm"
            >
              <motion.div
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
                    "drop-shadow(0 0 8px rgba(255, 45, 45, 0.4))",
                    "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <badge.icon className="w-5 h-5 text-[#FF2D2D]" />
              </motion.div>
              <span className="font-medium text-sm text-[#0A0A0A]">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, type: "spring" }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#FF2D2D]/30 transition-all duration-500 h-full relative shadow-sm">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                {/* Quote Icon */}
                <motion.div 
                  className="absolute -top-4 left-8"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                >
                  <div className="w-8 h-8 bg-[#FF2D2D] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,45,45,0.4)]">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2 relative z-10">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-[#FF2D2D] text-[#FF2D2D]" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#0A0A0A] mb-6 text-pretty leading-relaxed relative z-10">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    className="w-12 h-12 bg-[#FF2D2D]/10 rounded-full flex items-center justify-center border border-[#FF2D2D]/20"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(255, 45, 45, 0)",
                        "0 0 15px rgba(255, 45, 45, 0.2)",
                        "0 0 0 rgba(255, 45, 45, 0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <span className="font-bold text-[#FF2D2D]">
                      {testimonial.avatar}
                    </span>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-[#0A0A0A]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Border glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-colors pointer-events-none" />
              </div>
              
              {/* External glow */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
