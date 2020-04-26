import React from "react";

import "./Cover.css";

const Cover = () => {
  return (
    <div className="Cover">
      <div className="Container">
        <h3 className="Title">Interestellar</h3>
        <p className="Description">
          Narra las aventuras de un grupo de exploradores que hacen uso de un
          agujero de gusano recientemente descubierto para superar las
          limitaciones de los viajes espaciales tripulados y vencer las inmensas
          distancias que tiene un viaje interestelar.
        </p>
        <button className="Button">
          <i className="fas fa-play"></i>Reproducir
        </button>
        <button className="Button">
          <i className="fas fa-info-circle"></i>Más información
        </button>
      </div>
    </div>
  );
};

export default Cover;
