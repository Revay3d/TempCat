import React from 'react'

export default function CardModalida(props) {
  return (
    <div className="Contenedor__card">
    <div className="Contenedor">
        <img className="Contenedor__img" src={`img/${props.Imagen}.png`} />
        <h1 className="Contenedor__title">{props.Titulo}</h1>
        <p className="Contenedor__description">
         {props.Descripcion}
        </p>
        <button className="Contenedor__boton">Ingresar</button>
      </div>
      </div>

  )
}
