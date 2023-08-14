import './globals.css'

export const metadata = {
  title: 'HACKATHON',
  description: 'PANAVERSE CHALLEGE 1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
