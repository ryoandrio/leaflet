import { Component } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([-7.770563618515789, 110.37787982708055], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // var iconMarker = new L.Icon({
    //   iconUrl: './assets/marker-icon.png', 
    //   // iconSize: [30, 30],
    //   // iconAnchor: [-7.770563618515789, 110.37787982708055],
    //   // popupAnchor:  [-7.770563618515789, 110.37787982708055],
      
    // })

    const markPoint = L.marker([-7.770563618515789, 110.37787982708055],);
    markPoint.bindPopup('<p>Marker Location</p>')
    this.map.addLayer(markPoint)
  }

}
