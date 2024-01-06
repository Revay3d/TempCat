import React from 'react'
import "./assets/stylesheet/App.scss"
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Inicio from './page/Inicio.jsx'
import Error from './page/Error.jsx'
import Eventos from './page/Eventos.jsx'

export default function App() {
  return (
   <div>
 <Nav />
    <Routes>
    <Route path="/TempCat/" element={<Inicio />} exact />
    <Route path="/Eventos" element={<Error />} exact />
    <Route path='*' element={<Error />} />
         </Routes>
   </div>
  )
}
