import { addDoc, collection, doc, Firestore, setDoc } from '@angular/fire/firestore';
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
        const userRef = doc(this.firestore, 'users', this.auth.currentUser!.uid)
        await setDoc(userRef, { ...user, record: [] })
    }

    register({ email, password }: Session) {
        return createUserWithEmailAndPassword(this.auth, email, password)
    }

    signIn({ email, password }: Session) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }



}