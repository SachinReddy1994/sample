import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {

  parameter: string
  searchString: string
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appservice:AppService
    ) { }

  ngOnInit() {
    // console.log(this.router.url);
    this.activatedRoute.url.subscribe(response => {
      this.parameter = response[0].path;
      this.searchString = response[1].path;
      // console.log(response)
    });
   
    
    if(this.parameter == 'city') {
      // search by city name
            this.appservice.searchByCity( this.parameter).subscribe(response =>console.log(JSON.stringify(response)));
    }
    if(this.parameter == 'vendor') {
      // search by vendor name
          this.appservice.searchByCity(this.parameter).subscribe(response =>console.log(JSON.stringify(response)));
    }
  }

}
