import "./assets/stylesheet/App.scss";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

  
      <nav className="nav">
        <h1 className="nav__title">TempCat</h1>

        <ul className={`nav__items ${isOpen ? "visible" : ""}`}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Eventos</a>
          </li>
          <li>
            <a href="#">Equipo</a>
          </li>
          <li>
            <a href="https://discord.gg/FkSPDY26cV">Soporte</a>
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
    
      <header className="aviso">
        <p className="aviso__text">
          ¿Aun no te has unido a nuestro servidor de Discord?
        </p>
     <a href="#">  <button className="aviso__boton">Discord</button></a>
      </header>

      <main className="main">
        <h1 className="main__title">Mantenimiento</h1>
        <div>
        <p className="main__text">
          ¡Bienvenido a TempCat, un servidor de Minecraft lleno de diversión y
          socialización! Actualmente estamos en mantenimiento para mejorar tu
          experiencia de juego. Agradecemos tu paciencia y estamos emocionados
          por las mejoras que estamos implementando. ¡Nos vemos pronto en
          TempCat!
        </p>

        <img className="main__img" src="img/Steve.png" alt="Steve"/>
        </div>
      </main>

      <div className="marca-de-agua">
       <div>
        <a href="https://revay3d.github.io/revaydev/" className="marca-de-agua__nombre">Revaydev</a>
      <p> La interfaz y programacion fue hecha por RevayDev. </p>
      </div>
      
        <ul className="marca-de-agua__links">
          <li><a href="mailto:revaydev17.gmail.com">Soporte</a></li> | <li><a href="https://discord.com/users/1066481602403766313">Discord</a></li> | <li><a href="https://revay3d.github.io/revaydev/">Portafolio</a></li>
        </ul>
    
    </div>
    </>
  );
}

export default App;
