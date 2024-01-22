import "../assets/stylesheet/App.scss";
import React, { useState } from "react";
import CardModalidad from "../assets/components/CardModalida.jsx";
import Titulo from "../assets/components/Titulo.jsx";
import Noticia from "../assets/components/Noticia.jsx";
import Descripcion from "../assets/components/Descripcion.jsx";

import { motion } from "framer-motion";

export default function Inicio() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    

      <header className="aviso">
        <p className="aviso__text">
          ¿Aun no te has unido a nuestro servidor de Discord?
        </p>
        <a href="#">
          {" "}
          <button className="aviso__boton">Discord</button>
        </a>
      </header>

      <div className="Informacion">
        <div className="Informacion__interior">
          <h1 className="interior__title">TempCat</h1>
          <p className="interior__description">
            TempCat es un servidor de Minecraft donde cada día es una nueva
            aventura. Este servidor no es solo un lugar para jugar Minecraft,
            sino un espacio social donde puedes interactuar con amigos y conocer
            nuevas personas. Imagina un mundo donde puedes explorar vastos
            paisajes, construir estructuras impresionantes y enfrentarte a
            desafíos emocionantes, todo dentro del universo de Minecraft. Ya sea
            que te guste la minería, la construcción, la lucha contra los mobs o
            la colaboración en proyectos comunitarios, hay algo para todos en
            TempCat.
          </p>
        </div>
        <div className="Informacion__imagen">
          <img src="img/TempCat.jpg" alt="TempCat" />
          <div className="interior__links">
            <a href="#">
            <i className="fa-brands fa-discord"></i>
            </a>{" "}
            <i className="fa-brands fa-tiktok"></i>{" "}
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>

      <Titulo Titulo="Ultimas Noticias" />
      <Descripcion Descripcion="Estas son las ultimas noticias del servidor de Minecraft y del servidor de Discord. Se unos de los primeros en saber las novedades de esta comunidad" />

      <motion.div className="Slider-Container">
        <motion.div
          className="Slider"
          drag="x"
          dragConstraints={{ right: 0, left: -355 }}
        >
          <div>
            <Noticia
              Titulo="Creando"
              Descripcion="
          Actualmente, tanto nuestro servidor de Minecraft como nuestro diseño de servidor de Discord están en proceso de mejora. No olvides visitar nuestro servidor. Esperamos que todo salga bien, así que deséanos suerte.
        "
              Clase="importante"
            />
          </div>

          <div>
            <Noticia
              Titulo="Nuevo Bot"
              Descripcion="
          Uno de nuestros desarrolladores, quien por cierto es el encargado de crear esta página web informativa, está desarrollando un bot de Discord para facilitarnos la vida y hacerla más divertida :)     "
              Clase=""
            />
          </div>
        </motion.div>
      </motion.div>

      <Titulo Titulo="Modalidades" />
      <Descripcion Descripcion="Estas son las modalidades que esta disponibles en nuestro servidor de Minecraft." />

      <div className="Section">
        <CardModalidad
          Titulo="Survival"
          Descripcion="¡Bienvenido al modo de supervivencia de nuestro servidor de Minecraft! Aquí, cada bloque debe ser ganado trabajando duro. Recolecta recursos, construye tu refugio, gestiona tu hambre y lucha contra los enemigos que aparecen en la oscuridad. 
          "
          Imagen="Steve"
        />

<div className="Contenedor__card">
<div className="Contenedor Contenedor--crear">
   
   <h1 className="Crear__title">Creando</h1>
        
        <p className="Crear__description">
          Estamos trabajando para crear mas modalidades
         que saldran proximamente.
        </p>

        <span className="Crear__icon">+</span>
       
      </div>
   
      </div>
      </div>

<footer className="footer">
  <p className="footer__text"> © TempCat 2024</p>
  <p className="footer__text footer__text--mojang">No estamos afiliados con Mojang.</p>
  
  </footer>      

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

