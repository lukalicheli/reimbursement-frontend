import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/user-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:5000/project2/users";
  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl);
  }

  createUser(user: UserResponse): Observable<Object>{
    return this.httpClient.post(this.baseUrl, user);
  }

  updateUserActivationByUsername(username: string): Observable<UserResponse>{
    return this.httpClient.put<UserResponse>(this.baseUrl, username);
  }
}
