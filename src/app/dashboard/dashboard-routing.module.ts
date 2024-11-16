import { FormComponent } from './features/form/form.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './features/profile/profile.component';
import { RecordComponent } from './features/record/record.component';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './features/settings/settings.component';

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
        path : 'settings',
        component:SettingsComponent
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






