import React from 'react'


export default function Noticia(Clase, Titulo, Descripcion) {
  return (
    <div className={`Noticias Noticias--${Clase}`}>
        <h1 className="Noticias__title">{Titulo}</h1>
        <p className="Noticias__description">{Descripcion}</p>
      </div>
  )
}
