export interface User {
    userId?:string
    name: string
    lastName?: string | null
    email: string
    record?:string[] 
}