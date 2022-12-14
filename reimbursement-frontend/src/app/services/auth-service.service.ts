import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  setData(obj : any){
    this.user = obj;
  }
  getData(){
    return this.user;
  }

  user: UserResponse = {
    id: '',
    givenName: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    role: '',
    isActive: false,
  };

  login(credentials: Credentials): Observable<HttpResponse<UserResponse>> {
    return this.http.post('http://localhost:5000/project2/auth', credentials, {
      observe: 'response',
    }) as Observable<HttpResponse<UserResponse>>;
  }

  logout(): Observable<HttpResponse<UserResponse>> {
    return this.http.delete('http://localhost:5000/project2/auth', {
      observe: 'response'
    }) as Observable<HttpResponse<UserResponse>>;
  }
}
