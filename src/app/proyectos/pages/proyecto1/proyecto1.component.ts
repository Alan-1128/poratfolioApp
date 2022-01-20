import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto1',
  templateUrl: './proyecto1.component.html',
  styles: [
  ]
})
export class Proyecto1Component {

  datos = {
    titulo:'POKEDEX',
    descripcion:'Aplicación con el consumo de una API',

    renglon1:'',
    renglon2:'Funciona con:',
    renglon_1:'HTML',
    renglon_2:'CSS y Responsive Design',
    renglon_3:'JavaScript',

    demo:'https://cocky-stonebraker-3d9807.netlify.app/',
    codigo:'https://github.com/Alan-1128/App-Pokemon',
    img:'../../../assets/poke.png'
  }

}
