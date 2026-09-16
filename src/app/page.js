import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 pt-24">
      
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 z-0 pointer-events-none" style={{ backgroundImage: "url('https://i.ibb.co/Z6yQ3FVh/0e77e20c7ff068358432ff1bb52e1744.jpg')" }}></div>
        
        {/* Card Glassmorphism Premium */}
        <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-10 md:p-16 rounded-3xl border border-white/20 max-w-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          
          <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1 rounded-full text-xs font-bold tracking-widest mb-6">
            ✦ PREMIUM LOUNGE & CAFE ✦
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Main, Makan, & Nongkrong <br/> Dalam Satu Tempat
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rasakan pengalaman billiard kelas premium dengan suasana cafe yang elegan. Booking real-time, menu internasional, dan promo eksklusif menanti Anda.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/billiard" className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-3 px-8 rounded-lg text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all">
              Booking Meja Billiard
            </Link>
            <Link href="/cafe" className="bg-transparent border border-white/30 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white/10 transition-all backdrop-blur-md">
              Lihat Menu Cafe
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Premium */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 -mt-10 relative z-20">
        <div className="grid grid-cols-3 gap-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-[#D4AF37]">10+</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider">Meja Premium</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-2xl md:text-4xl font-bold text-[#D4AF37]">50+</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider">Menu Pilihan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-[#D4AF37]">24/7</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 uppercase tracking-wider">Buka Setiap Hari</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 md:px-10 mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
          Kenapa Memilih Kami?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 hover:border-[#D4AF37]/50 transition-all text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="text-4xl mb-4">🎱</div>
            <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Booking Real-Time</h3>
            <p className="text-gray-400 text-sm">Sistem booking langsung. Lihat ketersediaan meja secara langsung tanpa antri.</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 hover:border-[#D4AF37]/50 transition-all text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Premium F&B</h3>
            <p className="text-gray-400 text-sm">Menu cafe Titik Balik dengan rasa premium, cocok untuk teman santai Anda.</p>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-8 rounded-2xl border border-white/20 hover:border-[#D4AF37]/50 transition-all text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Ambiance Elegan</h3>
            <p className="text-gray-400 text-sm">Suasana Black & Gold yang mewah dan nyaman, bikin betah berjam-jam di sini.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
