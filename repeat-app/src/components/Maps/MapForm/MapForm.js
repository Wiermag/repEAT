import React, {  useEffect }from 'react';
import "./MapForm.css"

const  MapForm = ({ onDrag, id, icon }) => {

    useEffect(() => {
      initMap()
    },[])

    const initMap = () => {
      const map =  new window.google.maps.Map(document.getElementById(id), {
      center: {lat: 52.229675, lng: 21.012230}, 
      zoom : 12
      });
      const marker = new window.google.maps.Marker({
        position:  {lat: 52.229675, 
                    lng: 21.012230,},
        map:map,
        draggable: true,
        icon: icon 
      });

      window.google.maps.event.addListener(marker, 'dragend', function() {
        onDrag({
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng(),
        });
      });
    };
     
    return <div id={id}></div>
};

export {
    MapForm
}