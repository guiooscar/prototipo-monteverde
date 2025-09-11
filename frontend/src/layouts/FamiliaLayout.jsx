import { NavLink, Outlet } from 'react-router-dom'

export default function FamiliaLayout() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'240px 1fr', minHeight:'100vh'}}>
      <aside style={{borderRight:'1px solid #eee', padding:'1rem'}}>
        <h2>Familia</h2>
        <nav style={{display:'grid', gap:'0.5rem', marginTop:'1rem'}}>
          <NavLink to="/familia">Inicio</NavLink>
          {/* <NavLink to="/familia/reporte">Reporte Académico</NavLink>
          <NavLink to="/familia/comunicacion">Comunicación</NavLink> */}
        </nav>
      </aside>
      <main style={{padding:'1rem 1.5rem'}}>
        <header style={{display:'flex', justifyContent:'flex-end', paddingBottom:'1rem', borderBottom:'1px solid #eee'}}>
          <strong>Usuario: Familia Demo</strong>
        </header>
        <section style={{paddingTop:'1rem'}}>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
