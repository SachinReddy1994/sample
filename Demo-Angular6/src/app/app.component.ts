import { Component } from '@angular/core';
import { VendorService } from './app.vendorservice';

@Component({
    selector: 'cap',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    
    errorMessage:any;
    addresscity:string;
    name:string;
    vendors: any=[];

    constructor(private vendservice: VendorService){

    }


    searchbyCity(){
         this.vendservice.searchByCity(this.addresscity).subscribe((data:any)=>
                                                                this.vendors=data,
                                                                error=>this.errorMessage=error
                                                                );
    }




    searchVendor(){
         this.vendservice.searchName(this.name).subscribe((data:any)=>
                                                                this.vendors=data,
                                                                error=>this.errorMessage=error
                                                                );
    }
 }