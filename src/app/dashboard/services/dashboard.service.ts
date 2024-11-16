import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { arrayUnion, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(
        private firestore: Firestore,
        private auth: Auth,
        private http: HttpClient
    ) { }


    private apiUrl: string = 'https://oscarcz-tesis-2.hf.space/predict/'


    async addInRecord(result: string) {
        const userRef = doc(this.firestore, "users", this.auth.currentUser!.uid)
        let now = new Date();
        await updateDoc(userRef, {
            record: arrayUnion(`${result}-${now.toLocaleDateString('es-ES')}`)
        })

    }

    getRecords(): Observable<User> {
        const userRef = doc(this.firestore, 'users', this.auth.currentUser!.uid)
        return docData(userRef, { idField: "id" }) as unknown as Observable<User>
    }


    postData(body: any): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.post<any>(this.apiUrl, JSON.stringify(body), { headers })
    }


    getUser(): Observable<User> {
        const usersRef = doc(this.firestore, 'users', this.auth.currentUser!.uid);
        return docData(usersRef, { idField: "id" }) as unknown as Observable<User>
    }



}