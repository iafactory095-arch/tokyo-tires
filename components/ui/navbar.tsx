"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Inicio", href: "#hero", id: "01" },
  { name: "Nosotros", href: "#about", id: "02" },
  { name: "Categorías", href: "#categories", id: "03" },
  { name: "Tecnología", href: "#features", id: "04" },
  { name: "Testimonios", href: "#testimonials", id: "05" },
  { name: "Contacto", href: "#cta", id: "06" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-32 h-10">
          <Image
            src="/images/Logo_Horizontal.png"
            alt="Tokyo Tires"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#FF2D2D] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-[#FF2D2D] hover:bg-[#D42626] text-white">
            <Link href="https://wa.me/573125165270">WhatsApp</Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-gray-900">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-md bg-[#0A0A0A] border-zinc-800 p-0">
             <SheetHeader className="sr-only">
                <SheetTitle>Menú de Navegación</SheetTitle>
                <SheetDescription>Accede a las secciones de Tokyo Tires</SheetDescription>
             </SheetHeader>
            <div className="flex flex-col h-full p-8 pt-20">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-4 py-2"
                    >
                      <span className="font-mono text-sm text-[#FF2D2D] font-bold">
                        {link.id}
                      </span>
                      {/* Texto corregido: Blanco, sin opacidad y efecto hover */}
                      <span className="text-4xl sm:text-5xl font-display font-bold text-white opacity-100 transition-all group-hover:text-[#FF2D2D] group-hover:translate-x-2">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-8 pb-8">
                <div className="space-y-4">
                  <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Contacto Directo</p>
                  <Button asChild className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-6 text-lg font-bold rounded-xl flex gap-2">
                    <Link href="https://wa.me/573125165270">
                      <MessageCircle className="w-6 h-6" />
                      Chatear con Asesor
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}