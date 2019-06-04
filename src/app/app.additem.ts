import { Component, OnInit } from "@angular/core";
import { VendorService } from "./app.vendorservice";


@Component({
    selector:'item-app',
    templateUrl:'item.html'
})
export class AddItem implements OnInit{
            items:any={};
            constructor(private vendorservice:VendorService){}

            ngOnInit(){
                
            }
        }