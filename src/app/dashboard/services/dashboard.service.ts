import { Injectable } from '@angular/core';
import { Auth, idToken, User } from '@angular/fire/auth';
import { collection, collectionData, doc, docData, Firestore, getDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class DashboardService {

    public user?: User

    constructor(
        private firestore: Firestore,
        private auth: Auth
    ) {

    }

    getUserEmail(): string | null {
        return this.auth.currentUser ? this.auth.currentUser.email : null;
    }

    getUser(userEmail:string): Observable<any[]> {
        const usersRef = collection(this.firestore, 'users')
        return collectionData(usersRef, { idField: 'id' }) as Observable<any[]>
    }

    getUserByEmail(userEmail:string): Observable<any> {
        const userRef = doc(this.firestore, 'users', userEmail)
        return docData(userRef, { idField: 'email' })
    }
}