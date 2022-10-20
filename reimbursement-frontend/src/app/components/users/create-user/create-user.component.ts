import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  user: UserResponse = new UserResponse();

  constructor(
    private employeeService: EmployeeService,
    private router: Router, 
    private as: AuthServiceService
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.employeeService.createUser(this.user).subscribe(
      (data) => {
        if(this.as.user.role == 'admin' || this.as.user.role == 'finance manager'){
        this.goToUserList();} else {
          this.router.navigate(['']);
        }
      },
      (error) => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    this.saveUser();
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }

}
