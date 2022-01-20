import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { Proyecto1Component } from './pages/proyecto1/proyecto1.component';
import { Proyecto2Component } from './pages/proyecto2/proyecto2.component';
import { Proyecto3Component } from './pages/proyecto3/proyecto3.component';
import { Proyecto4Component } from './pages/proyecto4/proyecto4.component';
import { ComponentComponent } from './components/component.component';
import { Proyecto5Component } from './pages/proyecto5/proyecto5.component';


@NgModule({
  declarations: [
    GaleriaComponent,
    Proyecto1Component,
    Proyecto2Component,
    Proyecto3Component,
    Proyecto4Component,
    ComponentComponent,
    Proyecto5Component
  ],
  imports: [
    CommonModule,
    ProyectosRoutingModule
  ]
})
export class ProyectosModule { }
