import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from 'src/app/models/user-response';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(authService: AuthServiceService, private http: HttpClient, router: Router) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(): Observable<HttpResponse<UserResponse>> {
    return this.http.delete('http://localhost:5000/project2/auth', {
      observe: 'response'
    })  as Observable<HttpResponse<UserResponse>>;
  } 
}
