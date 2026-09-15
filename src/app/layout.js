import './globals.css'

export const metadata = {
  title: 'Pasific Billiard x Titik Balik Cafe',
  description: 'Main, Makan, & Nongkrong Dalam Satu Tempat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
