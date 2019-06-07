import { Component, OnInit } from "@angular/core";

import { VendorService } from "./app.vendorservice";
import { Router } from "@angular/router";

@Component({
    selector:'vendor-app',
    templateUrl:'vendor.html'
})

export class AddVendor implements OnInit{
        isVendorDetails = false;
        items = [];
        item = {
          price: 0,
          name: ''
        }
        vendor = {
          name: '',
          email: '',
          phoneNumber: '',
          addresshouseNumber: '',
          addresslandmark: '',
          addressarea: '',
          addresscity: '',
          addressstate: '',
          addresspincode: '',
        }
        constructor(private vendservice:VendorService) { }
      
        ngOnInit() {
         
        }
      
        markVendorDetails() {
          console.log(this.vendor);
          this.isVendorDetails = true;
        }
      
        addItem() {
          this.items.push(this.item);
          this.item = {
            price: 0,
            name: ''
          }
        }
      
        submitVendor() {
           this.vendor['foodList'] = this.items;
          console.log((this.vendor));
          // this.appservice.addVendor(this.vendor).subscribe((data:any)=>console.log(data))
          this.vendservice.addVendor(this.vendor).subscribe(response =>console.log(JSON.stringify(response)) )
        }
    }