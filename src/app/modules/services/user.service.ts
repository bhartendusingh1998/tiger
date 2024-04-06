import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string;
  constructor(private http: HttpClient) { 
    this.API_URL =  "http://localhost:3000";

  }

  submitUser(userObj: any) {
    return this.http.post(this.API_URL + '/userDetails/details', userObj)
  }

  getUserData() {
    return this.http.get(this.API_URL + '/userDetails/details')
  }

  userDelete(id:any) {
    return this.http.delete(this.API_URL + `/userDetails/${id}`)
  }

  getnewsapi() {
    return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2022-11-19&sortBy=publishedAt&apiKey=8668d2766fdf4560b20602f6801b98d7')
  }

}
