import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { arrayUnion, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export type UserModified = {
    name:string
    lastName:string
    birthDate:string
    description:string
}


@Injectable({ providedIn: 'root' })
export class DashboardService {

    constructor(
        private firestore: Firestore,
        private auth: Auth,
        private http: HttpClient
    ) { }


    private interpretationCount: { [key: string]: number } = {
        'trastorno Depresivo Mayor': 0,
        'trastorno del espectro autista': 0,
        'transtorno de soledad': 0,
        'transtorno de bipolaridad': 0,
        'transtorno de ansiedad': 0,
        'trastorno de estrés postraumático': 0,
        'trastorno del sueño': 0,
        'trastorno de depresión psicótica': 0,
        'trastorno alimenticio': 0,
        'trastorno por déficit de atención e hiperactividad': 0,
        'trastorno obsesivo-compulsivo': 0,
        'trastorno depresivo persistente': 0
    }


    get interpretationData(): {} {
        return this.interpretationCount
    }


    private apiUrl: string = 'https://oscarcz-tesis-2.hf.space/predict/'


    async addInRecord(result: string) {
        const userRef = doc(this.firestore, "users", this.auth.currentUser!.uid)
        let now = new Date();
        await updateDoc(userRef, {
            record: arrayUnion({
                id: Date.now().toString(),
                disorder: result,
                date: now.toLocaleDateString('es-ES')
            })
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

    updateUser(user: UserModified) {
        const userRef = doc(this.firestore, 'users', this.auth.currentUser!.uid)
        history.pushState(null, '', this.auth.currentUser!.uid);
        return updateDoc(userRef, {
            name: user.name,
            lastName: user.lastName,
            birthDate: user.birthDate

        })
    }

    deleteUser(){
        const userRef = doc(this.firestore,'users',this.auth.currentUser!.uid)
        return deleteDoc(userRef)
    }



}