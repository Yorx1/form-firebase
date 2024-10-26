import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { SessionRoutingModule } from './session-routing.module';
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { SessionService } from './services/session.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class SessionModule { }
