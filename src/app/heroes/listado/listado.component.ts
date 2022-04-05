import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando ...');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Héroe borrado: ' + this.heroeBorrado);
  }


}
