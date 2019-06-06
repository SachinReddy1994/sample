import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class AppService {
    //  private postUrl='http://localhost:9098/currypoint/add'
    // constructor(private http:HttpClient){}
    // addVendor(vend:any){
    //     return this.http.post<any>('http://localhost:9094/currypoint/add',vend);
    // }

    endpoint = 'http://localhost:9093/currypoint/add';
    searchc= 'http://localhost:9093/currypoint/searchby?pcity=';
    constructor(private http: HttpClient) { }

    addVendor(vendor:any) : any{
         console.log(vendor);
         console.log(vendor.foodList);
         let ind:number=0;
        let input = new FormData();
         input.append("name",vendor.name);
         input.append("email",vendor.email);
         input.append("phoneNumber",vendor.phoneNumber);
         input.append("address.houseNumber",vendor.addresshouseNumber);
             input.append("address.landmark",vendor.addresslandmark);
             input.append("address.area",vendor.addressarea);
             input.append("address.city",vendor.addresscity);
             input.append("address.state",vendor.addressstate);
            input.append("address.pincode",vendor.addresspincode);
            while(ind<vendor.foodList.length){
                input.append("items["+ind+"].name",vendor.foodList[ind].name);
                input.append("items["+ind+"].price",vendor.foodList[ind].price);
                ind++;
                } 
       // console.log(JSON.stringify(vendor));
        return this.http.post(`${this.endpoint}`, input);
    }
   searchByCity(addresscity:string):any{
       return this.http.get(+addresscity);
   }

   searchByName(name:string):any{
       return this.http.get('http://localhost:9093/currypoint/search?pname='+name);
   }
    
}