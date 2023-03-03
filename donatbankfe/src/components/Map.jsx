import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

function Map(){

  const [map, setMap] = useState(null);

  useEffect(() => {
    // Inizializza la mappa
    const initMap = () => {
      const options = {
        center: { lat: 45.464664, lng: 9.188540 }, 
        zoom: 14, 
      };
      const map = new window.google.maps.Map(document.getElementById("map"), options);
      setMap(map);
    };

    // Carica la mappa dopo che la libreria è stata caricata
    if (window.google) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9LowaJbiX_H8uS0lkUT3lXRyct0H4s-M`;
      script.onload = () => {
        initMap();
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
}

export default Map;
