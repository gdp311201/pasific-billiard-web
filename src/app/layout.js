import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Pasific Billiard x Titik Balik Cafe',
  description: 'Main, Makan, & Nongkrong Dalam Satu Tempat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="relative bg-black text-white min-h-screen">
        {/* Background Wallpaper Global */}
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-20 z-0 pointer-events-none" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        
        {/* Efek Glow Background */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Navbar Global */}
        <Navbar />

        {/* Konten Halaman */}
        <div className="relative z-10 pt-0">
          {children}
        </div>
      </body>
    </html>
  )
}
