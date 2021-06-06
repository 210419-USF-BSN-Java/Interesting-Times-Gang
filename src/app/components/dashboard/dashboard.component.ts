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
  imgA!: Array<Image>;
  url = 'http://localhost:8080/image/random/?userId=2'
  ngOnInit(): void {
    this.http.get<Array<Image>>(this.url)
    .subscribe((data: Array<Image>) => this.imgA = data);
    this.img = this.imgA[0];
   }
  showImage() {
    this.http.get<Array<Image>>(this.url)
      .subscribe((data: Array<Image>) => this.imgA = data);
      this.img = this.imgA[0];
  }
}