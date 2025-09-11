import { useMemo } from 'react'
import BarraTitulo from '../../components/BarraTitulo'
import Tabla from '../../components/Tabla'
import { apiFake } from '../../services/apiFake'
import califs from '../../mocks/calificaciones.json'

export default function ReporteAcademico() {
  // Para demo: asumimos estudiante 1
  const estudianteId = 1

  const est = useMemo(
    () => apiFake.estudiantes.find(e => e.id === estudianteId),
    []
  )

  const filas = useMemo(
    () =>
      (califs || [])
        .filter(n => n.estudianteId === estudianteId)
        .map(n => ({
          asignatura: n.asignatura,
          periodo: n.periodo,
          nota: n.nota
        })),
    []
  )

  return (
    <div>
      <BarraTitulo
        titulo="Reporte Académico"
        subtitulo={`Padre/Estudiante — ${est?.nombre || 'Estudiante'}`}
      />
      <Tabla
        columns={[
          { key: 'asignatura', header: 'Asignatura' },
          { key: 'periodo', header: 'Periodo' },
          { key: 'nota', header: 'Nota' }
        ]}
        rows={filas}
      />
    </div>
  )
}
