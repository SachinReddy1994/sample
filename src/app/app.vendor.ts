import { Address } from "./app.address";
import { Item } from "./app.item";


export class Vendor{
    name:string;
    email:string;
    phoneNumber:number;
    address:Address;
    items:Item[];
}