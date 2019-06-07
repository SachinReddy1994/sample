import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})

export class VendorService{
    endpoint = 'http://localhost:9093/currypoint/add';
        constructor(private http:HttpClient){}

        addVendor(vend:any){
            let ind:number=0;
            let vendor=new FormData();
            vendor.append("name",vend.name);
            vendor.append("email",vend.email);
            vendor.append("phoneNumber",vend.phoneNumber);
            vendor.append("address.houseNumber",vend.addresshouseNumber);
            vendor.append("address.landmark",vend.addresslandmark);
            vendor.append("address.area",vend.addressarea);
            vendor.append("address.city",vend.addresscity);
            vendor.append("address.state",vend.addressstate);
            vendor.append("address.pincode",vend.addresspincode);
            while(ind<vend.foodList.length){
                vendor.append("items["+ind+"].name",vend.foodList[ind].name);
                vendor.append("items["+ind+"].price",vend.foodList[ind].price);
                ind++;
                } 
            //vendor.append("items[0].name",ven)
            return this.http.post(`${this.endpoint}`,vendor);
        }

        searchByCity(addresscity:string): any{
            return this.http.get('http://localhost:9093/currypoint/searchby?pcity='+addresscity);
        }
        searchName(name:string): any{
            return this.http.get('http://localhost:9093/currypoint/search?pname='+name);
        }
    }

