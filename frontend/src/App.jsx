import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import DocenteLayout from './layouts/DocenteLayout.jsx'
import FamiliaLayout from './layouts/FamiliaLayout.jsx'
import DocenteHome from './pages/docente/Home.jsx'
import FamiliaHome from './pages/familia/Home.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/docente" element={<DocenteLayout />}>
        <Route index element={<DocenteHome />} />
        {/* Ejemplos futuros:
        <Route path="calificaciones" element={<RegistroCalificaciones />} />
        <Route path="asistencia" element={<Asistencia />} />
        <Route path="observador" element={<ObservadorAlumno />} />
        */}
      </Route>

      <Route path="/familia" element={<FamiliaLayout />}>
        <Route index element={<FamiliaHome />} />
        {/* Futuros:
        <Route path="reporte" element={<ReporteAcademico />} />
        <Route path="comunicacion" element={<Comunicacion />} />
        */}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
