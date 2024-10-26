import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestsComponent } from './form/pages/quests/quests.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  {
    path: 'session',
    loadChildren : () => import('./session/session.module').then(m => m.SessionModule)
  },
  {
    path: 'form',
    component: QuestsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/session/register']))
  },
  {
    path:'**',
    redirectTo: 'session/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
