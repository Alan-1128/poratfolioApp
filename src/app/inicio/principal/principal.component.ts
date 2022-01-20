import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent implements OnInit{

  @ViewChild('nose') nombre!:ElementRef;

  ngOnInit(): void {
    let tl = gsap.timeline({
      repeat: 0
    })
  
    tl.from('.cont__linea1', {
        duration: 1,
        x: 500, 
        scale: 0,
        delay: 1.1,
    });
  
    tl.from('.cont__linea2', {
        duration: 1,
        x: -500, 
        scale: 0,
        delay: 0,
    } ,'-=0.5' );
  
    tl.from('.logosC_I', {
        duration: 1,
        y: -200, 
        scale: 0,
        stagger: 0.14,
        ease: 'back'
  
    } ,'-=1' );
  }

}
