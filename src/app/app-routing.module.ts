import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home-page.component';
import { privateGuard, publicGuard } from './core/auth.guard';


const routes: Routes = [
  {
    canActivateChild:[publicGuard()],
    path: 'auth',
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    canActivateChild:[privateGuard()],
    path:'dashboard',
    loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'home-page',
    component:HomeComponent
  },
  {
    path:'**',
    redirectTo: 'home-page'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
