import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="nav">
        <h1 className="nav__title">TempCat</h1>

        <ul className={`nav__items ${isOpen ? "visible" : ""}`}>
          <li>
            <Link to="/TempCat/">Inicio</Link>
          </li>
          <li>
            <Link to="/Eventos">Eventos</Link>
          </li>

          <li>
            <a href="#">Soporte</a>
          </li>
        </ul>
        <div className="server-ip">
          <img
            className="server-ip__icon"
            src="img/minecraft.svg"
            alt="Minecraft"
          />
          <p className="server-ip__texto">Proximamente</p>
        </div>

        <span className="nav__toggle" onClick={toggleMenu}>
          {" "}
          <i className={`fa-solid ${isOpen ? "fa-x" : "fa-bars"}`}></i>
        </span>
      </nav> 

      <Outlet />
    </div>
  );
}
