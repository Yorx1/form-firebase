import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { NgxParticlesModule } from '@tsparticles/angular';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    ParticlesComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    NgxParticlesModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    ParticlesComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
