export default function contactoLayout(
  { children } : { children: React.ReactNode }

) {
  return (
    <>
    <header>Cabecera de contacto</header>
    <main>
       <section>{children} </section>
       <aside><form action="">
        <input type="search"name="" id="" placeholder="Voy a tener suerte"/>
        <input type="submit" value="Buscar" />
        </form>
        </aside>
       </main>
    <footer>Pie de contacto</footer>
    </>
    
  )
}
