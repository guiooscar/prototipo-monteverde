import { Routes, Route, Navigate } from 'react-router-dom'

// Páginas base
import Login from './pages/Login.jsx'

// Layouts
import DocenteLayout from './layouts/DocenteLayout.jsx'
import FamiliaLayout from './layouts/FamiliaLayout.jsx'

// Docente
import DocenteHome from './pages/docente/Home.jsx'
import RegistroCalificaciones from './pages/docente/RegistroCalificaciones.jsx'
import Asistencia from './pages/docente/Asistencia.jsx'
import ObservadorAlumno from './pages/docente/ObservadorAlumno.jsx'
import MensajesDocente from './pages/docente/Mensajes.jsx'   // <- placeholder/módulo

// Familia
import FamiliaHome from './pages/familia/Home.jsx'
import ReporteAcademico from './pages/familia/ReporteAcademico.jsx'
import MensajesFamilia from './pages/familia/Mensajes.jsx'   // <- placeholder/módulo

export default function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Rutas Docente */}
      <Route path="/docente" element={<DocenteLayout />}>
        <Route index element={<DocenteHome />} />
        <Route path="calificaciones" element={<RegistroCalificaciones />} />
        <Route path="asistencia" element={<Asistencia />} />
        <Route path="observador" element={<ObservadorAlumno />} />
        <Route path="mensajes" element={<MensajesDocente />} />
      </Route>

      {/* Rutas Familia */}
      <Route path="/familia" element={<FamiliaLayout />}>
        <Route index element={<FamiliaHome />} />
        <Route path="reporte" element={<ReporteAcademico />} />
        <Route path="mensajes" element={<MensajesFamilia />} />
      </Route>

      {/* 404 -> redirige a login */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
