export default function Home() {
  return (
    <main className="relative min-h-[90vh] flex items-center justify-center text-center px-4 pt-20">
      {/* Background Khusus Home */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0 pointer-events-none" style={{ backgroundImage: "url('https://i.ibb.co/Z6yQ3FVh/0e77e20c7ff068358432ff1bb52e1744.jpg')" }}></div>
      
      {/* Konten Hero */}
      <div className="relative z-10 bg-black/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-[#D4AF37]/30 max-w-3xl shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Main, Makan, & Nongkrong <br/> Dalam Satu Tempat
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-8">
          Sistem booking real-time, cafe interaktif, dan promo menarik. Nikmati pengalaman terbaik bersama kami.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="/billiard" className="bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-3 px-8 rounded-lg text-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
            Booking Meja Billiard
          </a>
          <a href="/cafe" className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white/10 transition-all">
            Lihat Menu Cafe
          </a>
        </div>
      </div>
    </main>
  )
}
