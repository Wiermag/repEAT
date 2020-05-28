import React, { useState, useEffect }from 'react';
import "./Map.css"

const  Map = () => {

    const [markerPosition, setMarkerPosition] = useState({
      lat: 52.229675, 
      lng: 21.012230
    });

   
    useEffect(() => {
        renderMap()
      },[markerPosition])

    const  renderMap = () => {
        window.initMap = initMap()
    };

    const initMap = () => {
          const map =  new window.google.maps.Map(document.getElementById("map"), {
          center: {lat: 52.229675, lng: 21.012230}, 
          zoom : 12
          });
          const marker = new window.google.maps.Marker({
            position: markerPosition,
            map:map,
            draggable: true, 
          });

          window.google.maps.event.addListener(marker, 'dragend', function() {
            setMarkerPosition({
              lat: marker.getPosition().lat(),
              lng: marker.getPosition().lng(),
            });
          });
          console.log(markerPosition)
        };
     
  return (
      <div id="map" className="slideLeft"></div>
      );
  };
  

export {
    Map
};


