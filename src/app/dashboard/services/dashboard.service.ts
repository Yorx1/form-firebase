import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, collectionData, doc, docData, DocumentReference, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class DashboardService {

    results:string[] = []

    constructor(
        private firestore: Firestore,
        private auth: Auth,
        private http: HttpClient
    ) {}


    public apiUrl: string = 'https://oscarcz-tesis-2.hf.space/predict/'


    async addInRecord() {
        const userRef = doc(this.firestore, "users", this.auth.currentUser!.uid)
        if(this.results.length >= 10){
            this.results = []
        }
        await updateDoc(userRef,{
            record:this.results
        })
    }

    getRecords(): Observable<any> {
        const userRef = doc(this.firestore, 'users', this.auth.currentUser!.uid)
        return docData(userRef, { idField: "id" })
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