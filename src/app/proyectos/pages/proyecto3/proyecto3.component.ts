import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto3',
  templateUrl: './proyecto3.component.html',
  styles: [
  ]
})
export class Proyecto3Component{

  datos = {
    titulo:'NUTRICIÓNAPP',
    descripcion:'Pagina web de nutrición',

    renglon1:'Utilización de Angular',
    renglon2:'Implementación de',
    renglon_1:'rutas y carga perezosa',
    renglon_2:'cuestionario reactivo',
    renglon_3:'modulos y componentes',

    demo:'https://fervent-johnson-f8286c.netlify.app',
    codigo:'https://github.com/Alan-1128/nutricionApp',
    img:'../../../assets/random.png'
  }

}
