import { NavLink, Outlet } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  padding: '0.5rem 0.75rem',
  borderRadius: 8,
  textDecoration: 'none',
  color: isActive ? '#fff' : '#333',
  background: isActive ? '#22c55e' : 'transparent'
})

export default function FamiliaLayout() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'240px 1fr', minHeight:'100vh'}}>
      <aside style={{borderRight:'1px solid #eee', padding:'1rem'}}>
        <h2>Familia</h2>
        <nav style={{display:'grid', gap:'0.5rem', marginTop:'1rem'}}>
          <NavLink to="/familia" style={linkStyle} end>Inicio</NavLink>
          {/* Próximas rutas:
          <NavLink to="/familia/reporte" style={linkStyle}>Reporte Académico</NavLink>
          <NavLink to="/familia/comunicacion" style={linkStyle}>Comunicación</NavLink>
          */}
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
