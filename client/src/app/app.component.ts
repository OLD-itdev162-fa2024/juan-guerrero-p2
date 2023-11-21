import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { HttpClient } from '@angular/common/http';
//import { error } from 'console';
>>>>>>> activity-6

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{
  title = 'BlogBox';

  constructor() {

  }

  ngOnInit(): void {

=======

export class AppComponent implements OnInit {
  title = 'client';
  //weatherForecasts: any;
  posts: any;

  constructor(private http: HttpClient)
  {

  }

  ngOnInit(): void
  {
    this.http.get('http://localhost:5164/api/posts').subscribe(
      response => {this.posts = response; },
      error => {console.log(error)}
    );
    /*this.http.get('http://localhost:5037/weatherforecast').subscribe(
      response => {this.weatherForecasts = response; },
      error => {console.log(error)}
    );*/
>>>>>>> activity-6
  }
}
