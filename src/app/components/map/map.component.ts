import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  lat = 6.2573115;
  lng = -75.5628717;
  marcadores: Marcador[] = [];

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog) {
    this.cargarStorage();
  }

  ngOnInit() {
  }

  agregarMarcador(evento) {
    const coords: { lat: number, lng: number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.mostrarSnackbar('Marcador agregado');
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarStorage() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.mostrarSnackbar('Marcador eliminado!');
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: { ...marcador }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.marcadores = result;
    });
  }

  private mostrarSnackbar(mensaje: string) {
    this._snackBar.open(mensaje, 'Cerrar', { duration: 3000 });
  }

}
