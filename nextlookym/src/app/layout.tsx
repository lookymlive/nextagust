import './global.css'
import Link from 'next/link'


export const metadata = {
  title: 'Lookym',
  description: 'LookymApp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Cabecera de la pagina</h2>
          <nav>
            <Link href="/login">Login</Link>-
             <Link href="/">Home</Link>-
            <Link href="/acerca">Acerca</Link>-
            <Link href="/contacto">Contacto</Link>-
            <Link href="/productos">Productos</Link>-
            <Link href="/dashboard">Dashboard</Link>
            
           
            

            
            </nav></header>
        <main> {children} </main>
        <footer>Luis @ 2024</footer>
        </body>
    </html>
  )
}
