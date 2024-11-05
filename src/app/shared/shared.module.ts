import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { NgxParticlesModule } from '@tsparticles/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ParticlesComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    NgxParticlesModule
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    ParticlesComponent
    
  ]
})
export class SharedModule { }
