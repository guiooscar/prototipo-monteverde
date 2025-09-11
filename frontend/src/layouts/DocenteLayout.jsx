import { NavLink, Outlet } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '0.5rem 0.75rem',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#fff' : '#333',
  background: isActive ? '#0ea5e9' : 'transparent'
})

export default function DocenteLayout() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'240px 1fr', minHeight:'100vh'}}>
      <aside style={{borderRight:'1px solid #eee', padding:'1rem'}}>
        <h2>Docente</h2>
        <nav style={{display:'grid', gap:'0.5rem', marginTop:'1rem'}}>
          <NavLink to="/docente" style={linkStyle} end>Inicio</NavLink>
          {/* Próximas rutas:
          <NavLink to="/docente/calificaciones" style={linkStyle}>Registro de Calificaciones</NavLink>
          <NavLink to="/docente/asistencia" style={linkStyle}>Asistencia</NavLink>
          <NavLink to="/docente/observador" style={linkStyle}>Observador</NavLink>
          */}
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
