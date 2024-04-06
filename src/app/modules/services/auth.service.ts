import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL: string;
   
  constructor(private http: HttpClient) { 
  this.API_URL =  "http://localhost:3000"
   }

   submitRegistration(registerObj: any) {
     return this.http.post(this.API_URL + `/user/signup`, registerObj)
   }
   
   submitLogin(loginObj: any) {
     return this.http.post(this.API_URL + `/user/login`, loginObj)
   }


}