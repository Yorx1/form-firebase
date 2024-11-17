import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormComponent } from './features/form/form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProfileComponent } from './features/profile/profile.component';
import { RecordComponent } from './features/record/record.component';
import { SettingsComponent } from './features/settings/settings.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    HomeComponent,
    ProfileComponent,
    RecordComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    NgxChartsModule,
    SharedModule, 
   ]
})
export class DashboardModule { }
