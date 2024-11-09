import { addDoc, collection,Firestore } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Session } from '../../interfaces/session';
import { User } from '../../interfaces/user';


@Injectable({ providedIn: 'root' })

export class AuthService {

    constructor(
        private auth: Auth,
        private firestore: Firestore
    ) { }

    async addUser(user: User) {
        const userRef = collection(this.firestore, 'users')
        await addDoc(userRef, user)
    }

    register({ email, password }: Session) {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    signIn({ email, password }: Session) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }



}