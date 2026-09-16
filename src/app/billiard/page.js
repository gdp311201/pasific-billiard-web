"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Link from 'next/link'

export default function Billiard() {
  const [tables, setTables] = useState([])
  const [selectedTable, setSelectedTable] = useState(null)

  useEffect(() => {
    const fetchTables = async () => {
      const { data } = await supabase.from('tables').select('*')
      if (data) setTables(data)
    }
    fetchTables()

    const channel = supabase
      .channel('tables_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tables' }, () => fetchTables())
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  const getTableStyle = (status) => {
    if (status === 'available') return 'bg-gradient-to-br from-white/10 to-white/5 border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer'
    if (status === 'occupied') return 'bg-red-900/20 border-red-500/30 cursor-not-allowed opacity-70'
    if (status === 'maintenance') return 'bg-gray-800/20 border-gray-700/30 cursor-not-allowed opacity-50'
    return 'bg-white/5 border-white/10'
  }

  const getStatusText = (status) => status === 'available' ? 'Tersedia' : status === 'occupied' ? 'Terpakai' : 'Maintenance'
  const getStatusTextColor = (status) => status === 'available' ? 'text-[#D4AF37]' : status === 'occupied' ? 'text-red-400' : 'text-gray-500'

  const events = [
    { title: "Turnamen Billiard Bulanan", date: "15 Oktober 2024", desc: "Hadiah Total Rp 5.000.000. Daftar sekarang!", img: "https://images.unsplash.com/photo-1604068549290-5ee5372dc0ff?q=80&w=600&auto=format&fit=crop" },
    { title: "Free Coaching", date: "Setiap Sabtu", desc: "Belajar teknik dasar billiard dari pro gratis!", img: "https://images.unsplash.com/photo-1530210124550-912dc9b76a3e?q=80&w=600&auto=format&fit=crop" }
  ]

  return (
    <main className="relative min-h-screen py-24 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="fixed inset-0 bg-cover bg-center opacity-20 z-0 pointer-events-none" style={{ backgroundImage: "url('https://i.ibb.co/XrsCXVWW/d5cb59b1bbc0330d62f49d39ae3f54b7.jpg')" }}></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
            Cek Ketersediaan Meja
          </h2>
          <p className="text-gray-400">Status meja diperbarui secara real-time. Klik meja berwarna emas untuk booking.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tables.map((table) => (
            <div 
              key={table.id} 
              onClick={() => table.status === 'available' && setSelectedTable(table)}
              className={`p-6 rounded-2xl flex flex-col items-center justify-center border backdrop-blur-2xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] ${getTableStyle(table.status)}`}
            >
              <div className="text-2xl font-bold mb-2 text-white">{table.table_number}</div>
              <div className="text-xs uppercase tracking-wider mb-3 text-gray-400">{table.type}</div>
              <div className={`text-sm font-semibold ${getStatusTextColor(table.status)}`}>{getStatusText(table.status)}</div>
            </div>
          ))}
        </div>

        {/* Event & Promo Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
            Event Mendatang
          </h2>
          <p className="text-gray-400 mb-12">Jangan lewatkan serunya event di Pasific Billiard.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/20 hover:border-[#D4AF37]/50 transition-all group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] text-left">
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                    <p className="text-[#D4AF37] text-sm font-medium">{event.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4 text-sm">{event.desc}</p>
                  <button className="text-sm bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">
                    Daftar Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Booking */}
      {selectedTable && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedTable(null)}></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-[#D4AF37]/50 rounded-2xl p-8 max-w-md w-full shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">Booking {selectedTable.table_number}</h3>
            <p className="text-gray-400 mb-6">Tipe: {selectedTable.type}. Silakan isi data untuk melanjutkan.</p>
            
            <div className="space-y-4">
              <input type="text" placeholder="Nama Lengkap" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#D4AF37]" />
              <input type="tel" placeholder="No. WhatsApp" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#D4AF37]" />
              <div className="grid grid-cols-2 gap-4">
                <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#D4AF37]" />
                <input type="time" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#D4AF37]" />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setSelectedTable(null)} className="flex-1 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all">Batal</button>
              <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">Konfirmasi</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
