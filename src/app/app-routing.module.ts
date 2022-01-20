import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './inicio/principal/principal.component';

const routes: Routes = [
  {
    path:'galeria',
    loadChildren:() => import('./proyectos/proyectos.module').then(m => m.ProyectosModule)
  },
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
