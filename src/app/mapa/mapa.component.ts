import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  mapa: Mapboxgl.Map;
  
  ngOnInit(): void {
  // TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
  
  const map = new Mapboxgl.Map({
  accessToken: environment.mapboxKey,
  container: 'mapa', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
  });

  this.crearMarcador(-74.5, 40);

  }

  crearMarcador(lng: number, lat:number){
    const marker = new Mapboxgl.Marker({
      draggable: true
    })

    .setLngLat([lng, lat])
    .addTo(this.mapa);
  }
 
}
