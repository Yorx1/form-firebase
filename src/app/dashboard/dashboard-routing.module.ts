import { FormComponent } from './features/form/form.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './features/profile/profile.component';
import { RecordComponent } from './record/record.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'form',
        component: FormComponent
    },
    {
        path: 'record',
        component: RecordComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }






