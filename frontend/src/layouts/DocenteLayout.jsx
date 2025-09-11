import { NavLink, Outlet } from 'react-router-dom'

export default function DocenteLayout() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'240px 1fr', minHeight:'100vh'}}>
      <aside style={{borderRight:'1px solid #eee', padding:'1rem'}}>
        <h2>Docente</h2>
        <nav style={{display:'grid', gap:'0.5rem', marginTop:'1rem'}}>
          <NavLink to="/docente">Inicio</NavLink>
          {/* <NavLink to="/docente/calificaciones">Registro de Calificaciones</NavLink>
          <NavLink to="/docente/asistencia">Asistencia</NavLink>
          <NavLink to="/docente/observador">Observador</NavLink> */}
        </nav>
      </aside>
      <main style={{padding:'1rem 1.5rem'}}>
        <header style={{display:'flex', justifyContent:'flex-end', paddingBottom:'1rem', borderBottom:'1px solid #eee'}}>
          <strong>Usuario: Docente Demo</strong>
        </header>
        <section style={{paddingTop:'1rem'}}>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
cd