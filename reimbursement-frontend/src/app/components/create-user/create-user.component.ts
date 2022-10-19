import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveUser() {
    this.employeeService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToUserList();
      },
      (error) => console.log(error)
    );
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }

  navigateToEmployees() {
    this.router.navigate(['users/employees-list']);
  }

  navigateToAdmins() {
    this.router.navigate(['users/admins-list']);
  }

  navigateToAll() {
    this.router.navigate(['/users']);
  }

  navigateToCreate() {
    this.router.navigate(['users/create-user']);
  }
}
