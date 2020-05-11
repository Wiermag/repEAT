import React, {  Component }from 'react';
import "./Map.css"

class Map extends Component  {

    componentDidMount() {
      this.renderMap()
    }

    renderMap = () => {
      window.initMap = this.initMap
    }

   initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat:52.229675, lng: 21.012230}, 
      zoom : 12
      })
    }

    render() {
      return (
        <div id="map"></div>
      )
    }
  }

export {
    Map
}



