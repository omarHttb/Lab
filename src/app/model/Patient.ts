import { BaseClass } from "./BaseClass";

export class Patient extends BaseClass{
    FirstName!:string
    LastName!:string
    Email!:string
    Phone!:string
    DateOfBirth!:Date
    NationalityId!:number
}