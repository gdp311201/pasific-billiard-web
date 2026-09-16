import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Pasific Billiard x Titik Balik Cafe',
  description: 'Main, Makan, & Nongkrong Dalam Satu Tempat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="relative bg-black text-white min-h-screen flex flex-col">
        {/* Efek Glow Background Global */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        {/* Navbar Global */}
        <Navbar />

        {/* Konten Halaman */}
        <div className="relative z-10 flex-grow pt-0">
          {children}
        </div>

        {/* Footer Global */}
        <Footer />
      </body>
    </html>
  )
}
