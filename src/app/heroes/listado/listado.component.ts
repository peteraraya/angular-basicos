import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./../../app.component.css']
})
export class ListadoComponent  {


  heroes: string[] = ['Spiderman','Hulk','Ironman','Thor','SuperMan'];
  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado =  this.heroes.shift() || '';

  }

  // constructor() {
  //   console.log('constructor : se dispara primero, antes de la renderización del mismo');
  //  }

  // ngOnInit(): void {
  //   console.log('ngOnInit se utiliza para inicializar cosas como hacer una petición de un servicio ');
  // }

}
