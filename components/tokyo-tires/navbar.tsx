"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, Facebook, Instagram, Music, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#about" },
  { name: "Categorías", href: "#categories" },
  { name: "Características", href: "#features" },
  { name: "Calidad", href: "#quality" },
  { name: "Reseñas", href: "#testimonials" },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1AqAwpNBhv/", hoverColor: '#1877F2', label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/tokyotires.co?igsh=MTFzNmQxc2U0NHJkZA==", hoverColor: '#E4405F', label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/573125165270", hoverColor: '#25D366', label: "WhatsApp" },
  { icon: Music, href: "https://www.tiktok.com/@tokyotires.co?_r=1&_t=ZS-95Ozk2o3q1o", hoverColor: '#00F2EA', label: "TikTok" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 10); // Throttle scroll event for performance
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-300 px-2 md:px-4 ${
          isScrolled
            ? "top-4 bg-white/90 backdrop-blur-lg border border-gray-200/50 shadow-md translate-y-2 rounded-2xl max-w-7xl mx-auto"
            : "top-4 bg-white/40 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl max-w-7xl mx-auto"
        }`}
      >
        <div className="mx-auto px-2 sm:px-4 lg:px-4">
          <div className="flex items-center h-20">
            {/* Logo - Pushed to the left */}
            <div className="flex-1 flex justify-start items-center">
              <motion.a
              href="#hero"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative w-12 h-12"
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(255, 45, 45, 0)",
                    "0 0 15px rgba(255, 45, 45, 0.2)",
                    "0 0 0 rgba(255, 45, 45, 0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                    src="/images/logo1.png"
                  alt="Tokyo Tires Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <span className="font-display text-2xl font-bold tracking-tight text-[#0A0A0A] leading-none">
                TOKYO<motion.span 
                  className="text-primary"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(255, 45, 45, 0.2)",
                      "0 0 10px rgba(255, 45, 45, 0.4)",
                      "0 0 5px rgba(255, 45, 45, 0.2)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >TIRES</motion.span>
              </span>
              </motion.a>
            </div>

            {/* Desktop Navigation - Perfectly Centered */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] uppercase tracking-widest font-bold text-gray-500 hover:text-[#FF2D2D] transition-colors relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
                    style={{ boxShadow: "0 0 10px rgba(255, 45, 45, 0.5)" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA & Mobile Menu - Pushed to the right */}
            <div className="flex-1 flex justify-end items-center gap-4">
              {/* Social Media Circles - Desktop */}
              <div className="hidden md:flex items-center gap-2 mr-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: link.hoverColor, color: "#fff", borderColor: link.hoverColor }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 border border-black/5 text-gray-600 transition-all duration-300"
                      title={link.label}
                    >
                      <Icon size={14} />
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
            <motion.button
                className={`lg:hidden p-2 transition-colors ${isMobileMenuOpen ? "text-white" : "text-[#0A0A0A]"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF2D2D]/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FF2D2D]/3 rounded-full blur-2xl" />
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-white hover:text-[#FF2D2D] transition-colors border-b border-white/10 pb-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[#FF2D2D] text-sm font-mono">0{index + 1}</span>
                      {link.name}
                    </span>
                    <ArrowRight className="w-5 h-5 text-white/30" />
                  </motion.span>
                </motion.a>
              ))}
              
              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <motion.a
                  href="https://wa.me/573125165270"
                  className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-xl"
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Chatea con nosotros
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (FAB) - Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 z-[60]"
        initial="initial"
        whileHover="hover"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0)",
            "0 0 0 12px rgba(37, 211, 102, 0.15)",
            "0 0 0 0 rgba(37, 211, 102, 0)"
          ]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <a
          href="https://wa.me/573125165270"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden h-14 group"
        >
          {/* Texto que se despliega al hacer hover */}
          <motion.span
            variants={{
              initial: { width: 0, opacity: 0, marginLeft: 0 },
              hover: { 
                width: "auto", 
                opacity: 1, 
                marginLeft: 20,
                marginRight: 4
              }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap font-bold text-sm overflow-hidden"
          >
            Contáctanos
          </motion.span>
          
          {/* Icono siempre visible en el círculo */}
          <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
        </a>
      </motion.div>
    </>
  )
}
