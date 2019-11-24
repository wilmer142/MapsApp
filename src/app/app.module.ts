import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/map/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWJjZMgqIdOCUdhQrNJZLV_I-872wgvBg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
