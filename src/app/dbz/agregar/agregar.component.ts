import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(){

    if( this.nuevo.nombre.trim().length == 0){
      return;
    }

     this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
