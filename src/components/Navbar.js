"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-[10px] sm:text-sm md:text-lg font-extrabold tracking-[0.15em] text-[#D4AF37] drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]">
            PASIFIC BILLIARD
          </span>
          <span className="text-[10px] sm:text-sm md:text-lg font-extrabold tracking-[0.15em] text-white">
            TITIK BALIK CAFE
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/billiard" className="hover:text-[#D4AF37] transition-colors">Billiard</Link>
          <Link href="/cafe" className="hover:text-[#D4AF37] transition-colors">Cafe</Link>
          <Link href="/promo" className="hover:text-[#D4AF37] transition-colors">Promo</Link>
          <Link href="/faq" className="hover:text-[#D4AF37] transition-colors">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/billiard" className="hidden md:block bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all text-sm">
            Booking Meja
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#D4AF37] text-3xl focus:outline-none z-[60]">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Overlay Mobile - SOLID HITAM */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Background Hitam Pekat (Tanpa Transparan) */}
          <div className="absolute inset-0 bg-black" onClick={() => setIsOpen(false)}></div>
          
          {/* Kotak Menu Kanan (Solid Hitam) */}
          <div className="absolute top-0 right-0 w-3/4 h-full bg-black border-l-2 border-[#D4AF37]/30 p-6 flex flex-col gap-6 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-[#D4AF37] text-3xl">✕</button>
            </div>
            <Link href="/billiard" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-[#D4AF37] border-b border-white/5 pb-3">Pasific Billiard</Link>
            <Link href="/cafe" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-[#D4AF37] border-b border-white/5 pb-3">Titik Balik Cafe</Link>
            <Link href="/promo" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-[#D4AF37] border-b border-white/5 pb-3">Promo & Event</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="text-xl text-gray-300 hover:text-[#D4AF37] border-b border-white/5 pb-3">FAQ</Link>
            <Link href="/billiard" onClick={() => setIsOpen(false)} className="text-center bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-3 rounded-lg mt-auto">
              Booking Meja Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
