import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    roleId: string = "1",
  ): Observable<User> {

    let registerInfo = {
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
      roleId: roleId,
    }

    return this.http.post(
      "http://localhost:8080/user/register",
      registerInfo
    ).pipe(map(response => response as User))
  }

  updateInfo(
    user: User,
  ): Observable<User> {
    return this.http.post(
      "http://localhost:8080/user/update-info",
      user
    ).pipe(map(response => response as User))
  }

  getUserInfo(): Observable<User> {
    return this.http.get(
      "http://localhost:8080/user/view-info"
    ).pipe(
      map(response => response as User)
    )
  }
}


