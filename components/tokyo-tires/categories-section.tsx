"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import Image from "next/image" // Importa Image de next/image
import { ArrowRight, Gauge, Route, Zap, Mountain, CalendarDays, Feather, Shield, Building, ArrowUp, Wind, Minimize, Award, Sparkles, Grip, Sun, Trees, Move, Activity } from "lucide-react"

// Mapeo de especificaciones a iconos de Lucide React
const iconMap: { [key: string]: React.ElementType } = {
  "Máximo agarre": Activity,
  "Pavimento": Route,
  "Alto rendimiento": Gauge,
  "Todo terreno": Mountain,
  "Uso diario": CalendarDays,
  "Versatilidad": Sparkles,
  "Off-road": Trees,
  "Terrenos áridos": Sun,
  "Tracción extrema": Grip,
  "Estabilidad": Shield,
  "Uso urbano": Building,
  "Eje delantero": ArrowUp,
  "Agilidad": Wind,
  "Compactas": Minimize,
  "Ligereza": Feather,
  "Maniobrabilidad": Move,
  "Diseño Sport": Award,
};

const cardThemes: { [key: string]: { color: string, glow: string } } = {
  "PISTA / SAMURAI": { color: "#00E0FF", glow: "rgba(0, 224, 255, 0.2)" },
  "MULTIPROPÓSITO / DRAGON": { color: "#FFB800", glow: "rgba(255, 184, 0, 0.2)" },
  "CROSS / AKUMA": { color: "#FF2D2D", glow: "rgba(255, 45, 45, 0.1)" },
  "LINEAL / TORA": { color: "#E2E8F0", glow: "rgba(226, 232, 240, 0.2)" },
  "SCOOTER / SHOGUN": { color: "#BC00FF", glow: "rgba(188, 0, 255, 0.6)" },
  "SPORT / SAKURA": { color: "#FF007A", glow: "rgba(255, 0, 122, 0.6)" },
};

const categories = [
  {
    title: "PISTA / SAMURAI",
    description: "Diseñadas específicamente para maximizar el rendimiento en superficies pavimentadas, ofreciendo el mejor agarre en alta velocidad.",
    image: "/images/4.png",
    specs: ["Máximo agarre", "Pavimento", "Alto rendimiento"],
  },
  {
    title: "MULTIPROPÓSITO / DRAGON",
    description: "Versatilidad total en una variedad de terrenos: asfalto, rutas todoterreno y áreas urbanas. La ventaja ideal para el uso diario.",
    image: "/images/21.png",
    specs: ["Todo terreno", "Uso diario", "Versatilidad"],
  },
  {
    title: "CROSS / AKUMA",
    description: "Especialmente para motocross. Ideales para superar grandes obstáculos, terrenos áridos y rutas extremas con tracción superior.",
    image: "/images/15.png",
    specs: ["Off-road", "Terrenos áridos", "Tracción extrema"],
  },
  {
    title: "LINEAL / TORA",
    description: "Diseñadas para terrenos continuos y lisos. Su uso frecuente en el eje delantero ofrece una excelente adherencia y estabilidad urbana.",
    image: "/images/27.png",
    specs: ["Estabilidad", "Uso urbano", "Eje delantero"],
  },
  {
    title: "SCOOTER / SHOGUN",
    description: "Específicas para scooters, con diámetro optimizado y opciones de labrado tipo pistera o multipropósito según tu estilo.",
    image: "/images/16.png",
    specs: ["Agilidad", "Uso urbano", "Compactas"],
  },
  {
    title: "SPORT / SAKURA",
    description: "Labrado tipo multipropósito con una ligereza clave, permitiendo un control más preciso y mayor maniobrabilidad en carretera.",
    image: "/images/19.png",
    specs: ["Ligereza", "Maniobrabilidad", "Diseño Sport"],
  },
]

export function CategoriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="categories" ref={ref} className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ x: x1 }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/20 to-transparent"
        />
        <motion.div 
          style={{ x: x2 }}
          className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
        <motion.div 
          style={{ x: x1 }}
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.span 
            className="text-[#FF2D2D] font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
            animate={{ 
              opacity: [0.6, 1, 0.6],
              textShadow: [
                "0 0 5px rgba(255, 45, 45, 0.2)",
                "0 0 5px rgba(255, 45, 45, 0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Líneas de Producción
          </motion.span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl 7xl font-bold mt-4 mb-4 sm:mb-6 text-balance text-gray-900 uppercase tracking-tighter">
            Catálogo <span className="text-[#FF2D2D]">Premium</span>
          </h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Ingeniería japonesa optimizada para rendimiento extremo.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const theme = cardThemes[category.title] || cardThemes["LINEAL / TORA"];
            return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 80, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-gray-100 hover:border-[#FF2D2D]/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              {/* Neon Breathing Border */}
              <motion.div
                className="absolute inset-0 z-30 pointer-events-none rounded-2xl sm:rounded-3xl border-2"
                style={{ borderColor: `${theme.color}44` }}
                animate={{ opacity: [0.2, 0.6, 0.2], boxShadow: [`0 0 0px ${theme.glow}`, `0 0 15px ${theme.glow}`, `0 0 0px ${theme.glow}`] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-white flex items-center justify-center p-6 sm:p-8 md:p-10">
                {/* Glass Platform */}
                <div className="absolute bottom-3 sm:bottom-4 w-3/4 h-10 sm:h-14 bg-gray-50/50 backdrop-blur-sm rounded-[50%] skew-x-[-15deg] border border-gray-200/50 z-0 shadow-inner overflow-hidden">
                   {/* Subtle Reflection */}
                   <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                </div>
                
                <motion.div
                  className="relative w-full h-full z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 3 : -3,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative p-4 sm:p-6 bg-white border-t border-gray-50">
                <motion.h3 
                  className="font-display text-base sm:text-lg md:text-xl font-bold mb-2 flex items-center gap-2 sm:gap-3 transition-all duration-300 text-gray-800 group-hover:text-[#FF2D2D]"
                  whileHover={{ 
                    x: 5,
                    textShadow: "0 0 8px rgba(255, 45, 45, 0.4)"
                  }}
                >
                  {category.title}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF2D2D]" />
                  </motion.div>
                </motion.h3>
                
                <p className="font-sans text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
                
                {/* Specs */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.specs.map((spec, i) => (
                    <motion.span
                      key={spec}
                      className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-[10px] sm:text-[11px] font-medium rounded-full transition-all duration-300"
                      whileHover={{ 
                        borderColor: theme.color,
                        backgroundColor: 'white',
                        color: '#1a1a1a'
                      }}
                    >
                      {iconMap[spec] && (
                        React.createElement(iconMap[spec], {
                          className: "w-3 h-3 text-gray-700",
                        })
                      )}
                      {spec}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
