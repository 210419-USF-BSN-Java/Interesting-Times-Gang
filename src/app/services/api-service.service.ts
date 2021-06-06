import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  configUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getImage(extension: string) {
    return this.http.get<Array<Image>>(this.configUrl + 'image/' + extension);
  }
}
