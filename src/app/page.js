export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-black/50 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
        <div className="text-xl font-bold tracking-wider">
          PASIFIC <span className="text-green-500">BILLIARD</span> x TITIK BALIK
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg transition-colors">
          Booking Meja
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center text-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1635776062365-fee307cc2c59?q=80&w=2070&auto=format&fit=crop')" }}></div>
        
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Main, Makan, & Nongkrong <br/> Dalam Satu Tempat
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sistem booking real-time, cafe interaktif, dan promo menarik. Nikmati pengalaman terbaik bersama kami.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Cek Ketersediaan Meja
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Lihat Menu Cafe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
