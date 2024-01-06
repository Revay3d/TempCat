import React from 'react'
import { Outlet, Link } from 'react-router-dom';
export default function Error() {
  return (
    <div className='Error'>
<h1 className='Error__title'>404</h1>
<p className='Error__description'>Lo sentimos, la dirección que has ingresado es incorrecta o no está disponible.</p>
   <Link  to={"/TempCat/"}>
   <button className='Error__button'>Volver al inicio</button>
   </Link>
    </div>
  )
}
