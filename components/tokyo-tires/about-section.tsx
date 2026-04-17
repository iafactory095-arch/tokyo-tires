"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Target, Users } from "lucide-react"

export function AboutSection() {
  const containerRef = useRef(null)
  
  // Configuración del scroll para el efecto parallax suave
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  
  // Efecto parallax: la imagen se desplaza verticalmente usando translateY vía framer-motion
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section 
      id="about" 
      ref={containerRef} 
      className="relative min-h-screen w-full overflow-hidden bg-[#0A0A0A] flex flex-col lg:flex-row"
    >
      {/* Lado Izquierdo: Contenido de Texto */}
      <div className="relative z-20 w-full lg:w-1/2 flex flex-col justify-center px-6 py-20 lg:py-0 lg:px-12 bg-[#0A0A0A]">
        <div className="max-w-2xl text-left mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Nuestra Pasión, <br />
              <span className="text-[#FF2D2D]">Tu Seguridad</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-light">
              En Tokyo Tires lideramos el mercado con ingeniería japonesa de vanguardia. 
              Diseñamos cada llanta pensando en la seguridad del motociclista colombiano, 
              entregando un rendimiento superior en cada curva.
            </p>
            
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                <Target className="w-5 h-5 text-[#FF2D2D]" /> Ingeniería de Pista
              </div>
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                <Users className="w-5 h-5 text-[#FF2D2D]" /> Respaldo Total
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Lado Derecho: Imagen con Parallax */}
      {/* Usamos relative en el contenedor flex para que ocupe su propio espacio al costado */}
      <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen overflow-hidden">
        {/* Overlay de degradado para suavizar el corte con el fondo negro (solo desktop) */}
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent hidden lg:block" />
        {/* Overlay superior para móvil para fundir con la sección de texto */}
        <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#0A0A0A] to-transparent lg:hidden" />

        <motion.div 
          style={{ y }} 
          className="absolute inset-x-0 -top-[20%] h-[140%] w-full" 
        >
          <Image
            src="/images/fotomoto5.jpg"
            alt="Sobre Tokyo Tires"
            fill 
            priority 
            className="object-cover object-center" 
          />
        </motion.div>
      </div>
    </section>
  )
}
