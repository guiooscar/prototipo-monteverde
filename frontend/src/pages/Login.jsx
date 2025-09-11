import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div style={{minHeight:'100vh', display:'grid', placeItems:'center', padding:'2rem'}}>
      <div style={{maxWidth:420, width:'100%', border:'1px solid #ddd', borderRadius:12, padding:'1.5rem'}}>
        <h1 style={{marginBottom:'0.5rem'}}>Plataforma MonteVerde</h1>
        <p style={{marginBottom:'1rem'}}>Simula el ingreso eligiendo un perfil:</p>
        <div style={{display:'grid', gap:'0.75rem'}}>
          <button onClick={() => navigate('/docente')} style={{padding:'0.75rem', borderRadius:8}}>
            Entrar como Docente
          </button>
          <button onClick={() => navigate('/familia')} style={{padding:'0.75rem', borderRadius:8}}>
            Entrar como Padre/Estudiante
          </button>
        </div>
      </div>
    </div>
  )
}
