import { Component, Input, OnInit } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styles: [
  ]
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tween = gsap.from('.flex-container', {
      duration: 1,
      x: -800,
      scale: 0,
      // ease: 'back'
  });
  }

  @Input() datos = {
    titulo:'',
    descripcion:'',

    renglon1:'',
    renglon2:'',
    renglon_1:'',
    renglon_2:'',
    renglon_3:'',

    demo:'',
    codigo:'',
    img:''
  };

}
