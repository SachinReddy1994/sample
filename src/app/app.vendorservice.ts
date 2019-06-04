import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "./app.item";


@Injectable({
    providedIn:'root'
})

export class VendorService{

        constructor(private http:HttpClient){}

        addVendor(vend:any){
            let vendor=new FormData();
            vendor.append("name",vend.name);
            vendor.append("email",vend.email);
            vendor.append("phoneNumber",vend.phoneNumber);
            vendor.append("address.houseNumber",vend.addresshouseNumber);
            vendor.append("address.landmark",vend.addresslandmark);
            vendor.append("address.area",vend.addressarea);
            vendor.append("address.city",vend.addresscity);
            vendor.append("address.state",vend.addressstate);
            vendor.append("address.picode",vend.addresspincode);
            let items:Item[];
            for (const data in items) {
                vendor.append("items[0].name",vend[data].items[0].name);
                vendor.append("items[0].price",vend[data].items[0].price);
            }
            //vendor.append("items[0].name",ven)
            return this.http.post("http://localhost:9098/currypoint/add",vendor);
        }
}