import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  item = {
    username: '',
    password: ''
  }
  constructor(private http: HttpClient) { }
  newUser(item: any) {
    //return this.http.post("http://localhost:3000/login/signup", { "user": item })
    return this.http.post("http://localhost:3000/signup", { "user": item })
  }
}
