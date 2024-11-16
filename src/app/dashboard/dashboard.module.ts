import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './features/profile/profile.component';
import { HomeComponent } from './features/home/home.component';
import { FormComponent } from './features/form/form.component';
import { RecordComponent } from './features/record/record.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './features/settings/settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    FormComponent,
    RecordComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule, 
   ]
})
export class DashboardModule { }
