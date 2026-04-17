"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bike, Ruler, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    motoType: "",
    tireSize: "",
  })

  const handleWhatsAppContact = () => {
    const phoneNumber = "573125165270"
    let message = ""

    if (formData.motoType.trim() && formData.tireSize.trim()) {
      message = `Hola Tokyo Tires, me gustaría consultar disponibilidad para una moto ${formData.motoType} con medida de llanta ${formData.tireSize}.`
    } else {
      message = "Hola Tokyo Tires, necesito consultar disponibilidad de unas llantas."
    }

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="cta" ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-white text-[#0A0A0A]">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated accents */}
      <motion.div
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#FF2D2D]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-[#FF2D2D]/10 rounded-full blur-[120px]"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span 
            className="text-[#FF2D2D] font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2"
            animate={{ 
              textShadow: [
                "0 0 5px rgba(255, 45, 45, 0.3)",
                "0 0 15px rgba(255, 45, 45, 0.6)",
                "0 0 5px rgba(255, 45, 45, 0.3)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4" />
            Interacción Directa
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance text-[#0A0A0A]">
            Encuentra Tu <span className="text-[#FF2D2D]">Llanta Ideal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Ingresa los datos de tu motocicleta y te ayudaremos a encontrar las 
            llantas perfectas para tu estilo de conducción.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative"
        >
          {/* Border glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF2D2D]/20 via-[#FF2D2D]/40 to-[#FF2D2D]/20 rounded-2xl blur-xl opacity-30" />
          
          <motion.div 
            className="relative bg-white border rounded-2xl p-8 md:p-12 overflow-hidden"
            animate={{
              borderColor: ["rgba(255, 45, 45, 0.2)", "rgba(255, 45, 45, 0.6)", "rgba(255, 45, 45, 0.2)"],
              boxShadow: [
                "0 0 10px rgba(255, 45, 45, 0.1), 0 10px 40px rgba(0,0,0,0.05)",
                "0 0 25px rgba(255, 45, 45, 0.3), 0 10px 40px rgba(0,0,0,0.05)",
                "0 0 10px rgba(255, 45, 45, 0.1), 0 10px 40px rgba(0,0,0,0.05)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#FF2D2D]/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF2D2D]/30 rounded-br-2xl" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Bike className="w-4 h-4 text-[#FF2D2D]" />
                  Tipo de Motocicleta
                </label>
                <Input
                  placeholder="Ej: Sport, Touring, Enduro"
                  value={formData.motoType}
                  onChange={(e) =>
                    setFormData({ ...formData, motoType: e.target.value })
                  }
                  className="bg-gray-50 border-gray-200 text-[#0A0A0A] focus:border-[#FF2D2D] transition-all"
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="text-sm font-medium flex items-center gap-2 text-gray-700">
                  <Ruler className="w-4 h-4 text-[#FF2D2D]" />
                  Medida de Llanta
                </label>
                <Input
                  placeholder="Ej: 120/70-17"
                  value={formData.tireSize}
                  onChange={(e) =>
                    setFormData({ ...formData, tireSize: e.target.value })
                  }                  className="bg-gray-50 border-gray-200 text-[#0A0A0A] focus:border-[#FF2D2D] transition-all"
                />
              </motion.div>
            </div>

            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <motion.div 
                whileTap={{ scale: 0.95 }}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#22c35e] text-white font-bold px-8 shadow-lg flex items-center gap-2"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="w-5 h-5" />
                  Consultar disponibilidad por WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-6">
            ¿Prefieres contactarnos directamente?
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <motion.a
              href="mailto:tokyotires.co@gmail.com"
              className="flex items-center gap-2 text-[#0A0A0A] hover:text-[#FF2D2D] transition-colors font-semibold group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ 
                  filter: [
                  "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
                  "drop-shadow(0 0 8px rgba(255, 45, 45, 0.4))",
                  "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
              <Mail className="w-5 h-5 group-hover:text-[#FF2D2D]" />
              </motion.div>
              tokyotires.co@gmail.com
            </motion.a>
          <span className="hidden sm:block text-gray-200">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-[#FF2D2D]" />
              Colombia
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
