import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  static credentials: any;
  constructor(private as: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  credentials: Credentials = {
    username: '',
    password: '',
  };

  loginFunction() {
    this.as.login(this.credentials).subscribe((data: any) => {
      this.as.user = data.body;
      if (this.as.user.role == 'admin') {
        this.router.navigate(['users']);
      } else if (this.as.user.role == 'finance manager') {
        this.router.navigate(['reimbursement']);
      } else if (this.as.user.role == 'employee') {
        this.router.navigate(['reimbursement/employee']);
      }
    });

    
  }
  
  signUpFunction() {
    this.router.navigate(['users/create-user']);
  }
}
