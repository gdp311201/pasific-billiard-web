"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'

export default function Cafe() {
  const [menus, setMenus] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await supabase.from('cafe_menu').select('*')
      if (data) setMenus(data)
    }
    fetchMenus()
  }, [])

  const categories = ['all', 'minuman', 'snack', 'makanan']
  const filteredMenus = activeCategory === 'all' ? menus : menus.filter(m => m.category === activeCategory)

  return (
    <main className="relative min-h-screen py-24 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="fixed inset-0 bg-cover bg-center opacity-20 z-0 pointer-events-none" style={{ backgroundImage: "url('https://i.ibb.co/Lzw8VNzT/801f5905acee80001264fbd6eebd66b3.jpg')" }}></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
            Titik Balik Cafe Menu
          </h2>
          <p className="text-gray-400">Pilihan makanan & minuman terbaik untuk menemani permainan billiard Anda.</p>
        </div>

        {/* Filter Tab Glassmorphism */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all backdrop-blur-md ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenus.map((item) => (
            <div key={item.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/20 hover:border-[#D4AF37]/50 transition-all group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/30 uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <span className="text-[#D4AF37] font-bold whitespace-nowrap">Rp {item.price.toLocaleString('id-ID')}</span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
