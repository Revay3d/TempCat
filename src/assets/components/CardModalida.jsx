import React from 'react'

export default function CardModalida(Imagen, Titulo, Descripcion) {
  return (
    <div className="Contenedor__card">
    <div className="Contenedor">
        <img className="Contenedor__img" src={`img/${Imagen}.png`} />
        <h1 className="Contenedor__title">{Titulo}</h1>
        <p className="Contenedor__description">
         {Descripcion}
        </p>
        <button className="Contenedor__boton">Ingresar</button>
      </div>
      </div>

  )
}
