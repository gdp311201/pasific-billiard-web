import Link from 'next/link'

export default function Promo() {
  const promos = [
    { title: "Happy Hour 50%", desc: "Diskon 50% untuk semua meja billiard setiap hari Senin-Jumat pukul 14:00 - 17:00.", img: "https://images.unsplash.com/photo-1606884291469-cf7a7d4c6f1d?q=80&w=600&auto=format&fit=crop" },
    { title: "Paket Nongkrong", desc: "Main billiard 2 jam + 2 Es Kopi Susu Titik Balik hanya Rp 85.000.", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop" },
    { title: "Student Night", desc: "Khusus pelajar (bawa KTM), dapatkan free popcorn untuk setiap booking meja.", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop" }
  ]

  return (
    <main className="relative min-h-screen py-24 px-4 md:px-10 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
          Promo & Event Berjalan
        </h2>
        <p className="text-gray-400">Jangan sampai ketinggalan penawaran spesial dari kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {promos.map((promo, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden border border-white/20 hover:border-[#D4AF37]/50 transition-all group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <div className="relative h-64 w-full overflow-hidden">
              <img src={promo.img} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-[#D4AF37]">{promo.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-4">{promo.desc}</p>
              <Link href="/billiard" className="inline-block text-sm bg-gradient-to-r from-[#D4AF37] to-[#F5C518] text-black font-bold py-2 px-6 rounded-lg hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all">
                Klaim Promo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
