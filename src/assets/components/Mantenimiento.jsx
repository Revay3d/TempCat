import React from 'react'

export default function Mantenimiento(props) {
  return (
    <main className="main">
    <h1 className="main__title">Mantenimiento</h1>
    <div>
    <p className="main__text">
     {props.Texto}
    </p>

    <img className="main__img" src="img/Steve.png" alt="Steve"/>
    </div>
  </main>
  )
}
