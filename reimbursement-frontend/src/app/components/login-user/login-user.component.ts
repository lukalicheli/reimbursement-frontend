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
  constructor(private as: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}

  credentials: Credentials = {
    username: '',
    password: '',
  };

  loginFunction() {
    console.log(this.credentials);
    this.as.login(this.credentials).subscribe((data: any) => {
      this.as.user = data.body;
      console.log(data.body);
      console.log(this.as.user);
      // if (this.as.user.role == 'admin') {
      //   this.router.navigate(['users']);
      // } else if (this.as.user.role == 'finance manager') {
      //   this.router.navigate(['reimbursement']);
      // } else if (this.as.user.role == 'employee') {
      //   this.router.navigate(['users']);
      // }
    });
  }
}
