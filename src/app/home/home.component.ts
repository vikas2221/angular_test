import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'Angular';
  fontSizePx: number = 18
  isSpecial:boolean = false
  
  homeData:any = [];
  about:any = {};
  recentPost:any = [];
  constructor(private httpService: HttpClient) {

  }

  ngOnInit() {
    this.httpService.get('./assets/data/home_data.json').subscribe(
      data => {
        console.log(data);
        this.homeData = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.httpService.get('./assets/data/about.json').subscribe(
      data => {
        console.log(data);
        this.about = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.httpService.get('./assets/data/recent_post.json').subscribe(
      data => {
        console.log(data);
        this.recentPost = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
