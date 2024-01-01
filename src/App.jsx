import "./assets/stylesheet/App.scss";
import React, { useState } from "react";
import CardModalidad from "./assets/components/CardModalida.jsx";
import Titulo from "./assets/components/Titulo.jsx";
import Noticia from "./assets/components/Noticia.jsx";

import { motion } from 'framer-motion';



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
        <a href="#">
          {" "}
          <button className="aviso__boton">Discord</button>
        </a>
      </header>

      <Titulo Titulo="Ultimas Noticias" />

<motion.div className="Slider-Container">
<motion.div className="Slider" drag="x" dragConstraints={{  right: 0, left: -710}}>
<div>
<Noticia
          Titulo="Reinico"
          Descripcion="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error sit illo. Excepturi, suscipit placeat aliquid odit consequuntur natus eum perferendis delectus corrupti repudiandae. Quaerat pariatur fugiat ea laudantium aliquid.

        "
          Clase="error"
        />
</div>

<div>
<Noticia
          Titulo="Regalos"
          Descripcion="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error sit illo. Excepturi, suscipit placeat aliquid odit consequuntur natus eum perferendis delectus corrupti repudiandae. Quaerat pariatur fugiat ea laudantium aliquid.

        "
          Clase=""
        />
</div>

<div>
<Noticia
          Titulo="Mejoras"
          Descripcion="
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate error sit illo. Excepturi, suscipit placeat aliquid odit consequuntur natus eum perferendis delectus corrupti repudiandae. Quaerat pariatur fugiat ea laudantium aliquid.

        "
          Clase="importante"
        />
</div>

</motion.div>
</motion.div>

      <Titulo Titulo="Modalidades" />

      <div className="Section">
        <CardModalidad
          Titulo="Survival"
          Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat voluptatem incidunt nesciunt delectus possimus quae explicabo, alias obcaecati consectetur hic rerum eveniet tenetur id dolore quidem commodi sapiente qui!"
          Imagen="Steve"
        />

        <CardModalidad
          Titulo="Skywars"
          Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat voluptatem incidunt nesciunt delectus possimus quae explicabo, alias obcaecati consectetur hic rerum eveniet tenetur id dolore quidem commodi sapiente qui!"
          Imagen="Steve"
        />

        <CardModalidad
          Titulo="Bedwars"
          Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat voluptatem incidunt nesciunt delectus possimus quae explicabo, alias obcaecati consectetur hic rerum eveniet tenetur id dolore quidem commodi sapiente qui!"
          Imagen="Steve"
        />

        <CardModalidad
          Titulo="PvP"
          Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat voluptatem incidunt nesciunt delectus possimus quae explicabo, alias obcaecati consectetur hic rerum eveniet tenetur id dolore quidem commodi sapiente qui!"
          Imagen="Steve"
        />

        <CardModalidad
          Titulo="Creative"
          Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, placeat voluptatem incidunt nesciunt delectus possimus quae explicabo, alias obcaecati consectetur hic rerum eveniet tenetur id dolore quidem commodi sapiente qui!"
          Imagen="Steve"
        />
      </div>

      <div className="marca-de-agua">
        <div>
          <a
            href="https://revay3d.github.io/revaydev/"
            className="marca-de-agua__nombre"
          >
            Revaydev
          </a>
          <p> La interfaz y programacion fue hecha por RevayDev. </p>
        </div>

        <ul className="marca-de-agua__links">
          <li>
            <a href="mailto:revaydev17.gmail.com">Soporte</a>
          </li>
          |
          <li>
            <a href="https://discord.com/users/1066481602403766313">Discord</a>
          </li>
          |
          <li>
            <a href="https://revay3d.github.io/revaydev/">Portafolio</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
