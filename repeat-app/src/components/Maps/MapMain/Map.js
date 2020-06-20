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
          //change marker size:
          const icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png', 
            scaledSize: new window.google.maps.Size(50, 50), 
            origin: new window.google.maps.Point(0,0), 
            anchor: new window.google.maps.Point(0, 0)
          };
          const marker = new window.google.maps.Marker({
              position: myLatlng,
              map: map,
              title: data.name,
              icon: icon
          });
          (function (marker, data) {
              window.google.maps.event.addListener(marker, "click", function () {
                  infoWindow.setContent(`<div class="window-marker">
                                          <span style=width:100%> ${data.name}     ${data.discount}</span>
                                          <ul>
                                            <li><p>OFFER:</p> ${data.aboutSale} </li>
                                            <li><p> WHEN:</p> ${data.dateSale} from ${data.timeSale1} to ${data.timeSale2}</li>
                                            <li><p> CONTACT:</p>  ${data.email} & ${data.phone}</li>
                                          </ul> 
                                        </div>             
                                        `);
                  infoWindow.open(map, marker);
              });
          })(marker, data);
          latlngbounds.extend(marker.position);
      }

      //from Firebase - data Company on MapMain
      for (let i = 0; i < formCompanyArray.length; i++) {
        const data = formCompanyArray[i]
        const myLatlng = new window.google.maps.LatLng(data.position.lat, data.position.lng);
        //change size:
        const icon = {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png', 
          scaledSize: new window.google.maps.Size(50, 50), 
          origin: new window.google.maps.Point(0,0), 
          anchor: new window.google.maps.Point(0, 0)
        };
        const marker = new window.google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.name,
            icon: icon
        });
        (function (marker, data) {
            window.google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent(` <div class="window-marker">
                                          <span style=width:100%> ${data.name}    ${data.discount}</span>
                                            <ul>
                                              <li><p>OFFER:</p> ${data.aboutSale}</li>
                                              <li><p>WHEN:</p> ${data.dateSale} from ${data.timeSale1} to ${data.timeSale2}</li>
                                              <li><p>CONTACT:</p> ${data.email} & ${data.phone}</li>
                                            </ul>
                                        </div>`
                                          );
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


