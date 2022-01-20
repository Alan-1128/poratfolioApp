import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    PrincipalComponent,
  ]
})
export class InicioModule { }
