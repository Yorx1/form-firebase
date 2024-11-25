import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { NgxSonnerToaster } from 'ngx-sonner';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './auth/auth-routing.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    NgxSonnerToaster,
    RouterModule,
    SharedModule,
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment[0].firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
    provideRouter(routes,withViewTransitions())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
