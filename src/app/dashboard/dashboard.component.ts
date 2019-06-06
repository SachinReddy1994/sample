import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vendorName: string;
  cityName: string;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  searchVendorName() {
    // console.log(this.vendorName);
    this.router.navigate(['/home/vendor/' + this.vendorName]);
  }

  searchCityName() {
    // console.log(this.cityName);
    this.router.navigate(['/home/city/' + this.cityName]);
  }


}
