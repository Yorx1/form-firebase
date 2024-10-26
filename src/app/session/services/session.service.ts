import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })


export class SessionService {
    constructor(private auth: Auth) { 


    }

    
    public register({email,password}:any){
        return createUserWithEmailAndPassword(this.auth,email,password)
    }

    public login({email,password}:any){
        return signInWithEmailAndPassword(this.auth,email,password)
    }

}