import { Injectable } from '@angular/core';
import { signOut,Auth } from '@angular/fire/auth'
import { User } from '../../interfaces/user';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class FormService {
   
    constructor(
        private auth:Auth,
        private firestore:Firestore
    ){}

    logOut(){
        return signOut(this.auth)
    }


    addPlace(user: User) {
        const userRef = collection(
            this.firestore, 'user'
        )
        return addDoc(userRef,user)
    }


}

