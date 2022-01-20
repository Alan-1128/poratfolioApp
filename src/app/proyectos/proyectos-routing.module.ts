import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { Proyecto1Component } from './pages/proyecto1/proyecto1.component';
import { Proyecto2Component } from './pages/proyecto2/proyecto2.component';
import { Proyecto3Component } from './pages/proyecto3/proyecto3.component';
import { Proyecto4Component } from './pages/proyecto4/proyecto4.component';
import { Proyecto5Component } from './pages/proyecto5/proyecto5.component';

const routes: Routes = [
  {
    path:'',
    component:GaleriaComponent,
    children:[
      {path:'proyecto1', component:Proyecto1Component},
      {path:'proyecto2', component:Proyecto2Component},
      {path:'proyecto3', component:Proyecto3Component},
      {path:'proyecto4', component:Proyecto4Component},
      {path:'proyecto5', component:Proyecto5Component},
      {path:'**', redirectTo:''}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
