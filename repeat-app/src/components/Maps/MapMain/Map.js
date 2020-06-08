import React, { useEffect, useState }from 'react';
import "./Map.css"
import { refFormPerson, refFormCompany } from "../../../firebase";

const  Map = ({ id }) => {

  const [formPersonArray, setFormPersonArray] = useState([]);
  const [formCompanyArray, setFormCompanyArray] = useState([]);

    useEffect(() => {
      initMap()
    });
 
    useEffect(() => {
      refFormPerson.orderByChild("position").on("value", function(snapshot) {
        const arrayPerson = [];
        snapshot.forEach(function(child) {
          arrayPerson.push(child.val())
        });
        setFormPersonArray(arrayPerson)
      });

      refFormCompany.orderByChild("position").on("value", function(snapshot) {
        const arrayCompany = [];
        snapshot.forEach(function(child) {
          arrayCompany.push(child.val())
        });
        setFormCompanyArray(arrayCompany);
      });
    },[]);
  
  const initMap  = () => {
      const map =  new window.google.maps.Map(document.getElementById(id), {
                  center: {lat: 52.229675, lng: 21.012230}, 
                  zoom : 10
              });
      const infoWindow = new window.google.maps.InfoWindow();
      let latlngbounds = new window.google.maps.LatLngBounds();
    
      //from Firebase - data Person on MapMain
      for (let i = 0; i < formPersonArray.length; i++) {
          const data = formPersonArray[i]
          const myLatlng = new window.google.maps.LatLng(data.position.lat, data.position.lng);
          const marker = new window.google.maps.Marker({
              position: myLatlng,
              map: map,
              title: data.name + data.sale,
          });
          (function (marker, data) {
              window.google.maps.event.addListener(marker, "click", function () {
                  infoWindow.setContent("<div style=width:100%;height:40px;text-align:center; display:flex;justify-content:center;align-items:center;>" + data.name + data.sale + "</div>");
                  infoWindow.open(map, marker);
              });
          })(marker, data);
          latlngbounds.extend(marker.position);
      }

      //from Firebase - data Company on MapMain
      for (let i = 0; i < formCompanyArray.length; i++) {
        const data = formCompanyArray[i]
        const myLatlng = new window.google.maps.LatLng(data.position.lat, data.position.lng);
        const marker = new window.google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.name + data.sale,
        });
        (function (marker, data) {
            window.google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent("<div style=width:200px;height:40px;text-align:center>" + data.name + data.sale + "</div>");
                infoWindow.open(map, marker);
            });
        })(marker, data);
        latlngbounds.extend(marker.position)
      }

      //Center View
      const bounds = new window.google.maps.LatLngBounds();
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
  };

    return <div id="map" className="slideLeft"></div>

  };
  
export {
    Map
};


