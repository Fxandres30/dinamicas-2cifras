import React from 'react'

type Numero = {
  numero: string
  estado: 'libre' | 'reservado' | 'pagado' | 'temporal'
}

type Props = {
  numeros: Numero[]
}

const BarraProgresoNumeros: React.FC<Props> = ({ numeros }) => {
  const total = numeros.length
  const pagados = numeros.filter(n => n.estado === 'pagado').length
  const reservados = numeros.filter(n => n.estado === 'reservado').length
  const libres = numeros.filter(n => n.estado === 'libre').length

  const porcentajePagados = (pagados / total) * 100
  const porcentajeReservados = (reservados / total) * 100
  const porcentajeLibres = (libres / total) * 100

  return (
    <div className="barra-progreso-container">
      <div className="barra">
        <div className="seccion pagados" style={{ width: `${porcentajePagados}%` }}></div>
        <div className="seccion reservados" style={{ width: `${porcentajeReservados}%` }}></div>
        <div className="seccion libres" style={{ width: `${porcentajeLibres}%` }}></div>
      </div>
      <div className="leyenda">
  <div className="color pagados">
    <span>Pagados</span>
    <strong>{pagados}</strong>
  </div>

  <div className="color reservados">
    <span>Reservados</span>
    <strong>{reservados}</strong>
  </div>

  <div className="color libres">
    <span>Disponibles</span>
    <strong>{libres}</strong>
  </div>
</div>

    </div>
  )
}

export default BarraProgresoNumeros