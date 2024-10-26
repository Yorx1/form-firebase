import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './session/pages/login/login.component';
import { QuestsComponent } from './form/pages/quests/quests.component';
import { SharedModule } from './shared/shared.module';
import { SessionModule } from './session/session.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SessionModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"session-firebase-auth","appId":"1:408925918908:web:db0a6cacf7fc088d2722b9","storageBucket":"session-firebase-auth.appspot.com","apiKey":"AIzaSyCBguL9SBmDv0K3B1WZ2wJB_yEuekfkqGQ","authDomain":"session-firebase-auth.firebaseapp.com","messagingSenderId":"408925918908"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
