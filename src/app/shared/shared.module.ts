import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    ParticlesComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    NgxParticlesModule
  ],
  exports:[
    HeaderComponent,
    NavbarComponent,
    ParticlesComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
