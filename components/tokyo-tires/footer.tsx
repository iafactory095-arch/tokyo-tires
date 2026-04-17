"use client"

import { motion } from "framer-motion"
import { 
  type LucideIcon,
  Facebook, 
  Instagram, 
  MessageCircle, 
  Music,
  MapPin, 
  Mail, 
  Leaf, 
  Send, 
  CreditCard 
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  productos: [
    { name: "Llantas Pista", href: "#categories" },
    { name: "Llantas Calle", href: "#categories" },
    { name: "Llantas Off-Road", href: "#categories" },
    { name: "Llantas Touring", href: "#categories" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Misión y Visión", href: "#about" },
    { name: "Tecnología", href: "#features" },
    { name: "Catálogo", href: "#models" },
  ],
  soporte: [
    { name: "Encuentra tu Llanta", href: "#cta" },
    { name: "Garantía", href: "#" },
    { name: "Distribuidores", href: "#cta" },
    { name: "Contacto", href: "#cta" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1AqAwpNBhv/", hoverColor: '#1877F2', label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/tokyotires.co?igsh=MTFzNmQxc2U0NHJkZA==", hoverColor: '#E4405F', label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/573125165270", hoverColor: '#25D366', label: "WhatsApp" },
  { icon: Music, href: "https://www.tiktok.com/@tokyotires.co?_r=1&_t=ZS-95Ozk2o3q1o", hoverColor: '#00F2EA', label: "TikTok" }
];
export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-zinc-900 relative overflow-hidden text-white">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#FF2D2D]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#hero"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative w-12 h-12"
                animate={{ 
                  filter: [
                    "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
                    "drop-shadow(0 0 10px rgba(255, 45, 45, 0.3))",
                    "drop-shadow(0 0 0 rgba(255, 45, 45, 0))",
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
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                TOKYO<motion.span 
                  className="text-[#FF2D2D]"
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

            <p className="text-zinc-400 mb-4 max-w-sm text-pretty text-sm leading-relaxed">
              Neumáticos con diseño japonés de calidad superior para motocicletas. 
              Especialistas en compuestos de alto rendimiento con 60% caucho natural.
            </p>

            {/* Social Links - Integrated below description */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon; // Esto soluciona el error ts(2339)
                return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3, backgroundColor: link.hoverColor, borderColor: link.hoverColor, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 transition-all duration-300"
                  aria-label={link.label}
                > 
                  <IconComponent className="w-4 h-4" />
                </motion.a>
              )})}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-4 border-t border-zinc-900/50">
              <motion.div 
                className="flex items-center gap-3 text-sm text-zinc-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-[#FF2D2D]" />
                <span>Colombia | Distribución Nacional</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-sm text-zinc-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-[#FF2D2D]" />
                <span>tokyotires.co@gmail.com</span>
              </motion.div>
            </div>

            {/* Environmental Badge */}
            <motion.div 
              className="mt-4 flex items-center gap-3 text-xs text-zinc-500 uppercase tracking-widest"
              animate={{ 
                filter: [
                  "drop-shadow(0 0 0 rgba(34, 197, 94, 0))",
                  "drop-shadow(0 0 10px rgba(34, 197, 94, 0.3))",
                  "drop-shadow(0 0 0 rgba(34, 197, 94, 0))",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Leaf className="w-3 h-3 text-green-500" />
              <span className="text-green-400">Cultura Ambiental Empresarial</span>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block text-zinc-400 hover:text-[#FF2D2D] transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block text-zinc-400 hover:text-[#FF2D2D] transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6 text-white">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="inline-block text-zinc-400 hover:text-[#FF2D2D] transition-all duration-300 text-sm hover:translate-x-1"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map & Newsletter Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-4 items-stretch">
          {/* Newsletter (1/3 approx) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full lg:w-1/3 bg-zinc-950 border border-zinc-800 p-8 rounded-[16px] flex flex-col justify-center"
          >
            <h4 className="font-display font-bold text-xl mb-3 text-white flex items-center gap-2 uppercase tracking-tight">
              <Send className="w-5 h-5 text-[#FF2D2D]" />
              Únete al Club
            </h4>
            <p className="text-sm text-zinc-400 mb-6">
              Recibe ofertas exclusivas y novedades sobre rendimiento.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Tu correo" 
                className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-[#FF2D2D] focus:ring-0 h-11"
              />
              <Button className="bg-[#FF2D2D] hover:bg-[#D42626] text-white font-bold h-11 px-6">
                Unirse
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-zinc-700 grayscale opacity-40">
               <CreditCard className="w-8 h-8" />
            </div>
          </motion.div>

          {/* Map Section (2/3 approx) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 rounded-[16px] overflow-hidden border border-zinc-800 shadow-2xl relative h-[350px] group"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1166582556166!2d-73.11454532517556!3d7.112477392891071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fdd70782d3d%3A0x3868bf73943f08f0!2zU29ucmXDrXI!5e0!3m2!1ses-419!2sco!4v1774983779761!5m2!1ses-419!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Tokyo Tires"
            className="w-full h-full border-0 transition-all duration-700 ease-in-out"
          ></iframe>
        </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Tokyo Tires Colombia. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3, backgroundColor: link.hoverColor, borderColor: link.hoverColor, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-zinc-400 transition-all duration-300 shadow-sm"
                    aria-label={link.label}
                  > 
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <motion.a
                href="#"
                className="text-zinc-500 hover:text-[#FF2D2D] transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacidad
              </motion.a>
              <motion.a
                href="#"
                className="text-zinc-500 hover:text-[#FF2D2D] transition-colors"
                whileHover={{ y: -2 }}
              >
                Términos
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
