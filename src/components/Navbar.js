"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo Kiri */}
        <Link href="/" className="flex items-center gap-3">
          <img src="https://i.ibb.co/r288NqZc/ame-4.png" alt="Pasific" className="h-10 md:h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <span className="text-gray-600 text-xl">x</span>
          <img src="https://i.ibb.co/cSHykD32/ame-3.png" alt="Titik Balik" className="h-10 md:h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
        </Link>

        {/* Menu Desktop (Tengah) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/billiard" className="hover:text-[#D4AF37] transition-colors">Pasific Billiard</Link>
          <Link href="/cafe" className="hover:text-[#D4AF37] transition-colors">Titik Balik Cafe</Link>
          <Link href="/promo" className="hover:text-[#D4AF37] transition-colors">Promo</Link>
          <Link href="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link>
        </div>

        {/* Tombol Booking & Burger (Kanan) */}
        <div className="flex items-center gap-4">
          <Link href="/billiard" className="hidden md:block bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all text-sm">
            Booking Meja
          </Link>

          {/* Burger Button Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-3xl focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Muncul kalau burger diklik) */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/billiard" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#D4AF37] py-2 border-b border-white/5">Pasific Billiard</Link>
          <Link href="/cafe" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#D4AF37] py-2 border-b border-white/5">Titik Balik Cafe</Link>
          <Link href="/promo" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#D4AF37] py-2 border-b border-white/5">Promo</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#D4AF37] py-2">FAQ</Link>
          <Link href="/billiard" onClick={() => setIsOpen(false)} className="text-center bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-3 rounded-lg mt-2">
            Booking Meja
          </Link>
        </div>
      )}
    </nav>
  )
}
