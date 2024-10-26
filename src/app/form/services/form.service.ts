import { Injectable } from '@angular/core';
import { signOut,Auth } from '@angular/fire/auth'

@Injectable({ providedIn: 'root' })

export class FormService {
   
    constructor(
        private auth:Auth
    ){}

    logOut(){
        return signOut(this.auth)
    }


}

