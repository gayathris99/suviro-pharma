import './globals.css'
import Navbar from '@/components/layout/Navbar'

export const metadata = {
  title: 'Suviro Pharma — Progress Through Science',
  description: 'Suviro Pharma manufactures bioequivalence-tested generic medicines — clinically proven, rigorously tested, accessible to every patient across India.',
  icons: {
    icon: [
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icon-192.png' }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}