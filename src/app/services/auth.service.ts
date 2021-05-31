import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(
    username: string,
    password: string
  ): Observable<User> {
    // this is where they'll connect to the application
    let loginInfo = {
      username: username,
      password: password,
    }

    return this.http.post(
      "http://localhost:8080/user/login",
      loginInfo,
    ).pipe(
      map(response => response as User)
    )

  }

  register(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    email: string,
  ): Observable<User> {

    let registerInfo = {
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      email: email,
    }

    return this.http.post("http://localhost:8080/user/register", {
      registerInfo
    }).pipe(map(response => response as User))
  }
}


