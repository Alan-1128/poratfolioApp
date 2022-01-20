import { Component, OnInit } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let tween = gsap.from('.head', {
      duration: 1,
      y: -300,
      scale: 0,
      // opacity: 1,
    });
  }

}
