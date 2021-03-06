﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AddVendor } from './app.addvendor';
import { SearchCity } from './app.searchcity';
import { SearchVendor } from './app.searchvendor';


const route:Routes=[

    {path:"add",component:AddVendor},
    {path:"city",component:SearchCity},
    {path:"vname",component:SearchVendor},
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,HttpClientModule,RouterModule.forRoot(route)
    ],
    declarations: [
        AppComponent,AddVendor,SearchCity,SearchVendor
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }