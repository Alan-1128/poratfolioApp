import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto2',
  templateUrl: './proyecto2.component.html',
  styles: [
  ]
})
export class Proyecto2Component {

  datos = {
    titulo:'TURISMOAPP',
    descripcion:'Pagina web para ver sitios turisticos',

    renglon1:'',
    renglon2:'Funciona con:',
    renglon_1:'HTML',
    renglon_2:'CSS y Responsive Design',
    renglon_3:'JavaScript',

    demo:'https://sad-curran-0ce859.netlify.app/',
    codigo:'https://github.com/Alan-1128/Pagina-Web-Turismo',
    img:'../../../assets/climaCompleto.png'
  }

}
