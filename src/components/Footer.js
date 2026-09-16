export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[#D4AF37] mb-4 tracking-wider">PASIFIC BILLIARD</h3>
          <p className="text-gray-400 text-sm mb-4">Tempat billiard premium dengan standar internasional dan suasana elegan.</p>
          <a href="https://www.instagram.com/pasific.billiard" target="_blank" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm inline-flex items-center gap-2">
            <img src="https://i.ibb.co/W4h5yHRL/ame-1.png" alt="Ig Pasific" className="h-5 w-auto" /> @pasific.billiard
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4 tracking-wider">TITIK BALIK CAFE</h3>
          <p className="text-gray-400 text-sm mb-4">Menu makanan & minuman pilihan untuk menemani santai Anda.</p>
          <a href="https://www.instagram.com/titikbalik_kembali" target="_blank" className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm inline-flex items-center gap-2">
            <img src="https://i.ibb.co/W4h5yHRL/ame-1.png" alt="Ig Titik Balik" className="h-5 w-auto" /> @titikbalik_kembali
          </a>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4 tracking-wider">JAM OPERASIONAL</h3>
          <p className="text-gray-400 text-sm">Senin - Minggu</p>
          <p className="text-gray-400 text-sm">10:00 - 03:00 WIB</p>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Pasific Billiard x Titik Balik Cafe. All rights reserved.
      </div>
    </footer>
  )
}
