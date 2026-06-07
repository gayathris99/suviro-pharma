import './globals.css'

export const metadata = {
  title: 'Suviro Pharma Life — Progress Through Science',
  description: 'Suviro Pharma manufactures bioequivalence-tested generic medicines — clinically proven, rigorously tested, accessible to every patient across India.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}