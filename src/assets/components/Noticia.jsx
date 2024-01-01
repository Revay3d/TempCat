import React from 'react'


export default function Noticia(props) {
  return (
    <div className={`Noticias Noticias--${props.Clase}`}>
        <h1 className="Noticias__title">{props.Titulo}</h1>
        <p className="Noticias__description">{props.Descripcion}</p>
      </div>
  )
}
