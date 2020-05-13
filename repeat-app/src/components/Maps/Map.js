import React, {  useEffect }from 'react';
import "./Map.css"

const  Map = () => {

  useEffect(() => {
      renderMap()
    },[])

  const  renderMap = () => {
      window.initMap = initMap
  }
  const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat:52.229675, lng: 21.012230}, 
      zoom : 12
      })
  }
  return (
      <div id="map"></div>
      )
    
  }
export {
    Map
}



