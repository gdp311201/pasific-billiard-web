"use client"
import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Home() {
  const [tables, setTables] = useState([])
  const [menus, setMenus] = useState([])
  const [selectedTable, setSelectedTable] = useState(null)

  // Ambil data meja & menu dari Supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: tablesData } = await supabase.from('tables').select('*')
      const { data: menusData } = await supabase.from('cafe_menu').select('*')
      if (tablesData) setTables(tablesData)
      if (menusData) setMenus(menusData)
    }
    fetchData()

    // Real-time listener untuk meja
    const channel = supabase
      .channel('tables_channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tables' }, () => fetchData())
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  // Styling Meja
  const getTableStyle = (status) => {
    if (status === 'available') return 'bg-white/5 border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer'
    if (status === 'occupied') return 'bg-red-900/10 border-red-500/30 cursor-not-allowed opacity-70'
    if (status === 'maintenance') return 'bg-gray-800/20 border-gray-700/30 cursor-not-allowed opacity-50'
    return 'bg-white/5 border-white/10'
  }

  const getStatusText = (status) => status === 'available' ? 'Tersedia' : status === 'occupied' ? 'Terpakai' : 'Maintenance'
  const getStatusTextColor = (status) => status === 'available' ? 'text-[#D4AF37]' : status === 'occupied' ? 'text-red-400' : 'text-gray-500'

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/r288NqZc/ame-4.png" alt="Pasific" className="h-10 md:h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <span className="text-gray-600 text-xl">x</span>
            <img src="https://i.ibb.co/cSHykD32/ame-3.png" alt="Titik Balik" className="h-10 md:h-12 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-2 px-4 md:px-6 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all text-sm md:text-base">
            Booking Meja
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[85vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635776062365-fee307cc2c59?q=80&w=2070&auto=format&fit=crop')" }}></div>
        
        <div className="relative z-10 bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#D4AF37]/30 max-w-3xl shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Main, Makan, & Nongkrong <br/> Dalam Satu Tempat
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8">
            Sistem booking real-time, cafe interaktif, dan promo menarik. Nikmati pengalaman terbaik bersama kami.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#live-tables" className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-3 px-8 rounded-lg text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
              Cek Ketersediaan Meja
            </a>
            <a href="#cafe-menu" className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white/10 transition-all">
              Lihat Menu Cafe
            </a>
          </div>
        </div>
      </div>

      {/* Live Table Section */}
      <section id="live-tables" className="py-20 px-4 md:px-10 max-w-6xl mx-auto relative z-10">
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
              className={`p-6 rounded-2xl flex flex-col items-center justify-center border backdrop-blur-md transition-all duration-300 ${getTableStyle(table.status)}`}
            >
              <div className="text-2xl font-bold mb-2 text-white">{table.table_number}</div>
              <div className="text-xs uppercase tracking-wider mb-3 text-gray-400">{table.type}</div>
              <div className={`text-sm font-semibold ${getStatusTextColor(table.status)}`}>{getStatusText(table.status)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cafe Menu Section */}
      <section id="cafe-menu" className="py-20 px-4 md:px-10 max-w-6xl mx-auto relative z-10 border-t border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
            Titik Balik Cafe Menu
          </h2>
          <p className="text-gray-400">Pilihan makanan & minuman terbaik untuk menemani permainan billiard Anda.</p>
        </div>

        {/* Grid Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all group">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/30">
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
      </section>

      {/* Modal Pop-up Booking */}
      {selectedTable && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-black/90 border border-[#D4AF37]/50 rounded-2xl p-8 max-w-md w-full shadow-[0_0_30px_rgba(212,175,55,0.2)]">
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
              <button onClick={() => setSelectedTable(null)} className="flex-1 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 transition-all">
                Batal
              </button>
              <button className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
