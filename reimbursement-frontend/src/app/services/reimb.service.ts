import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReimbResponse } from '../models/reimb-response';
import { UpdateReimbBody } from '../models/update-reimb-body';

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

  getOwnedReimbList(username : string): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/owned/" + username);
  }

  getOwnedPendingList(username : string): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/ownedPending/" + username);
  }

  getOwnedDeniedList(username : string): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/ownedDenied/" + username);
  }

  getOwnedApprovedList(username : string): Observable<ReimbResponse[]> {
    return this.httpClient.get<ReimbResponse[]>(this.baseUrl + "/ownedApproved/" + username );
  }

  createReimbursement(reimb: ReimbResponse): Observable<Object>{
    return this.httpClient.post(this.baseUrl, reimb)
  }

  approveOrDeny(form: UpdateReimbBody): Observable<HttpResponse<any>>{
    return this.httpClient.put<any>(this.baseUrl, form) as unknown as Observable<HttpResponse<ReimbResponse>>;
  }
}
