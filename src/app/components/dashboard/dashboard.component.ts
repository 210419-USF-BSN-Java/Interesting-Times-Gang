import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Image } from '../../models/image';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient) { }
  img?: Image;
  url = 'http://localhost:8080/image/random/?userId=2'
  ngOnInit(): void {
    this.http.get<Image>(this.url)
    .subscribe((data: Image) => this.img = data);
    console.log(this.img);
   }
  showImage() {
    this.http.get<Image>(this.url)
      .subscribe((data: Image) => this.img = data);
      console.log(this.img);
  }
}