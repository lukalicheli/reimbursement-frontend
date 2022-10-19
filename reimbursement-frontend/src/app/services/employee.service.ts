import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UpdateUserBody } from '../models/update-user-body';
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

  getAdminsList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl + "/admins");
  }

  getEmployeesList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl + "/employees");
  }

  getFinanceManagersList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl + "/financeManagers");
  }

  getActiveList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl + "/active");
  }

  getInactiveList(): Observable<UserResponse[]> {
    return this.httpClient.get<UserResponse[]>(this.baseUrl + "/inactive");
  }

  createUser(user: UserResponse): Observable<Object>{
    return this.httpClient.post(this.baseUrl, user);
  }

  updateUser(form: UpdateUserBody): Observable<HttpResponse<any>>{
    return this.httpClient.put<any>(this.baseUrl, form) as unknown as Observable<HttpResponse<UserResponse>>;
  }


  updateUserActivationByUsername(username: string): Observable<UserResponse>{
    return this.httpClient.put<UserResponse>(this.baseUrl, username);
  }
}
