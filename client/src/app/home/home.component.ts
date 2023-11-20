import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { error } from 'console';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5164/api/posts').subscribe(
      response => {this.posts = response; },
      error => {console.log(error)}
    );
    /*this.http.get('http://localhost:5037/weatherforecast').subscribe(
      response => {this.weatherForecasts = response; },
      error => {console.log(error)}
    );*/
  }
}
