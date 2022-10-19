import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReimbResponse } from '../models/reimb-response';

@Injectable({
  providedIn: 'root'
})
export class ReimbService {
  private baseUrl = "http://localhost:5000/project2/reimb";

  constructor(private httpClient: HttpClient) { }

  getReimbList(): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl);
  }

  getPendingList(): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/AllPending");
  }

  getDeniedList(): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/AllDenied");
  }

  getApprovedList(): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/AllApproved");
  }

  createReimbursement(reimb: ReimbResponse): Observable<Object>{
    return this.httpClient.post(this.baseUrl, reimb)
  }
}
