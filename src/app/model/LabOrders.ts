import { BaseClass } from "./BaseClass";

export class LabOrders extends BaseClass{
    DateTaken!:Date
    LabId!:number
    PatientId!:number
    TestNameId!:number
}