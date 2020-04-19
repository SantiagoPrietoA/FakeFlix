import React from "react";

import "./Cover.css";

const Cover = () => {
  return (
    <div className="pelicula-principal">
      <div className="contenedor">
        <h3 className="titulo">Interestellar</h3>
        <p className="descripcion">
          Narra las aventuras de un grupo de exploradores que hacen uso de un
          agujero de gusano recientemente descubierto para superar las
          limitaciones de los viajes espaciales tripulados y vencer las inmensas
          distancias que tiene un viaje interestelar.
        </p>
        <button role="button" className="boton">
          <i className="fas fa-play"></i>Reproducir
        </button>
        <button role="button" className="boton">
          <i className="fas fa-info-circle"></i>Más información
        </button>
      </div>
    </div>
  );
};

export default Cover;
