export default function Faq() {
  const faqs = [
    { q: "Apakah saya bisa booking meja sebelum datang?", a: "Ya, Anda bisa melakukan booking real-time melalui website kami di menu Billiard. Pilih meja yang tersedia dan isi data Anda." },
    { q: "Apakah ada biaya keanggotaan (member)?", a: "Tidak ada biaya member. Semua orang bisa datang dan bermain. Namun, kami sering mengadakan promo khusus untuk pelanggan setia." },
    { q: "Bisakah saya memesan makanan dari cafe ke meja billiard?", a: "Tentu saja! Staf Titik Balik Cafe akan mengantarkan pesanan langsung ke meja billiard Anda." },
    { q: "Apakah parkir tersedia?", a: "Ya, kami menyediakan area parkir yang aman dan luas untuk mobil maupun motor." }
  ]

  return (
    <main className="relative min-h-screen py-24 px-4 md:px-10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#D4AF37] to-[#F5C518] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400">Hal-hal yang sering ditanyakan oleh customer kami.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
            <h3 className="text-lg font-bold text-[#D4AF37] mb-2">{faq.q}</h3>
            <p className="text-gray-300 text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
