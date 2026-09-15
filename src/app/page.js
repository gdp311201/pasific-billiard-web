"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Home() {
  const [tables, setTables] = useState([])

  // Ambil data meja dari Supabase & Real-time listener
  useEffect(() => {
    // 1. Ambil data awal
    const fetchTables = async () => {
      const { data, error } = await supabase.from('tables').select('*')
      if (data) setTables(data)
    }
    fetchTables()

    // 2. Subscribe ke perubahan real-time
    const channel = supabase
      .channel('tables_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tables' }, (payload) => {
        fetchTables() // Refresh data kalau ada perubahan
      })
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Fungsi warna status meja
  const getStatusColor = (status) => {
    if (status === 'available') return 'bg-green-500 hover:bg-green-600 text-black'
    if (status === 'occupied') return 'bg-red-500 text-white cursor-not-allowed'
    if (status === 'maintenance') return 'bg-gray-600 text-gray-400 cursor-not-allowed'
    return 'bg-gray-500'
  }

  const getStatusText = (status) => {
    if (status === 'available') return 'Tersedia'
    if (status === 'occupied') return 'Terpakai'
    if (status === 'maintenance') return 'Maintenance'
    return 'Tidak Tersedia'
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navbar dengan Logo */}
      <nav className="flex justify-between items-center p-4 md:p-6 bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img src="https://i.ibb.co/r288NqZc/ame-4.png" alt="Pasific Billiard" className="h-10 md:h-12 w-auto" />
          <span className="text-xl text-gray-400">x</span>
          <img src="https://i.ibb.co/cSHykD32/ame-3.png" alt="Titik Balik Cafe" className="h-10 md:h-12 w-auto" />
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base">
          Booking Meja
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635776062365-fee307cc2c59?q=80&w=2070&auto=format&fit=crop')" }}></div>
        
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 leading-tight">
            Main, Makan, & Nongkrong <br/> Dalam Satu Tempat
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sistem booking real-time, cafe interaktif, dan promo menarik. Nikmati pengalaman terbaik bersama kami.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#live-tables" className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Cek Ketersediaan Meja
            </a>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Lihat Menu Cafe
            </button>
          </div>
        </div>
      </div>

      {/* Live Table Availability Section */}
      <section id="live-tables" className="py-20 px-4 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Cek Ketersediaan Meja</h2>
        <p className="text-gray-400 text-center mb-10">Status meja diperbarui secara real-time. Klik meja hijau untuk booking.</p>

        {/* Grid Meja */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {tables.map((table) => (
            <div 
              key={table.id} 
              className={`p-6 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${getStatusColor(table.status)}`}
            >
              <div className="text-2xl font-bold mb-2">{table.table_number}</div>
              <div className="text-sm uppercase tracking-wider mb-1">{table.type}</div>
              <div className="text-xs font-medium bg-black/20 px-3 py-1 rounded-full">
                {getStatusText(table.status)}
              </div>
            </div>
          ))}
        </div>

        {/* Legend / Keterangan Status */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded"></div> Tersedia</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded"></div> Terpakai</div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-600 rounded"></div> Maintenance</div>
        </div>
      </section>

    </main>
  )
}
