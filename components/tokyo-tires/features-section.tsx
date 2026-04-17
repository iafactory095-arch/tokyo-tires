"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Target, Layers, Droplets, Shield } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "60% Caucho Natural",
    description:
      "Alta concentración de caucho natural en cada neumático, mejorando el agarre y rendimiento significativamente.",
    stat: "60%",
    statLabel: "Caucho natural",
  },
  {
    icon: Target,
    title: "Máximo Agarre",
    description:
      "Compuesto de caucho seleccionado meticulosamente para una respuesta precisa en cualquier condición.",
    stat: "100%",
    statLabel: "Diseño japonés",
  },
  {
    icon: Droplets,
    title: "Todo Clima",
    description:
      "Diseños adaptados para distintas condiciones climáticas, desde asfalto seco hasta superficies mojadas.",
    stat: "365",
    statLabel: "Días de uso",
  },
  {
    icon: Shield,
    title: "Calidad Certificada",
    description:
      "Estándares de calidad más altos a nivel mundial, garantizando seguridad y confiabilidad.",
    stat: "3 Años",
    statLabel: "Garantía",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section id="features" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-[#1A1A1A] text-white border-b border-gray-100">
      {/* Animated background circle */}
      <motion.div 
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full"
      />
      <motion.div 
        style={{ rotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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
                "0 0 5px rgba(255, 45, 45, 0.3)",
                "0 0 15px rgba(255, 45, 45, 0.6)",
                "0 0 5px rgba(255, 45, 45, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Tecnología
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance text-white">
            Características de{" "}
            <span className="text-[#FF2D2D]">Calidad Superior</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Cada diseño y compuesto de caucho es seleccionado meticulosamente, 
            asegurando productos que cumplen los más altos estándares mundiales.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15, type: "spring" }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 h-full hover:border-[#FF2D2D]/50 transition-all duration-500 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-16 h-16 bg-[#FF2D2D]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF2D2D]/20 transition-colors border border-[#FF2D2D]/20"
                >
                  <feature.icon className="w-8 h-8 text-[#FF2D2D]" />
                  
                  {/* Icon glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 rgba(220, 38, 38, 0)",
                        "0 0 20px rgba(220, 38, 38, 0.3)",
                        "0 0 0 rgba(220, 38, 38, 0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="relative z-10 font-display text-xl font-bold mb-3 group-hover:text-[#FF2D2D] transition-colors text-white">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-gray-400 text-sm mb-6">
                  {feature.description}
                </p>

                {/* Stat */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <motion.span 
                    className="font-display text-3xl font-bold text-[#FF2D2D]"
                    animate={{ 
                      textShadow: [
                        "0 0 5px rgba(255, 45, 45, 0.3)",
                        "0 0 15px rgba(255, 45, 45, 0.6)",
                        "0 0 5px rgba(255, 45, 45, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {feature.stat}
                  </motion.span>
                  <p className="text-gray-500 text-sm mt-1">
                    {feature.statLabel}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
              </div>

              {/* External glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
