import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.scss']
})
export class AddvendorComponent implements OnInit {
 vendors:any={};
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
  constructor(private appservice:AppService) { }

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
    this.appservice.addVendor(this.vendor).subscribe(response =>console.log(JSON.stringify(response)) )
  }
}
