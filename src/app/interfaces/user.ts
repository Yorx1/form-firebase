export interface User {
    id?: string
    name: string
    lastName?: string | null
    email: string,
    birthDate:string,
    description?:string | null
    record?: [{
        id:string
        disorder: string
        date: string
    }]
    
}