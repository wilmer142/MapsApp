import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 6.2573115;
  lng = -75.5628717;

  constructor() {
    const nuevoMarcador = new Marcador(this.lat, this.lng);
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {
    const coords: { lat: number, lng: number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
  }
}
