import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = 6.2573115;
  lng = -75.5628717;

  constructor() { }

  ngOnInit() {
  }

}
