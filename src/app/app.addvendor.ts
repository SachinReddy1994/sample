import { Component, OnInit } from "@angular/core";

import { VendorService } from "./app.vendorservice";
import { Router } from "@angular/router";

@Component({
    selector:'vendor-app',
    templateUrl:'vendor.html'
})

export class AddVendor implements OnInit{
        //vendors:Vendor[];

        vendors:any={};
       // items:any={};
        constructor(private vendorservice:VendorService,private router:Router){}

        ngOnInit(){
            
        }
        addVendor(){
            this.vendorservice.addVendor(this.vendors).subscribe((data:any)=>console.log(data));
            this.router.navigate(['item']);
        }
        
    }