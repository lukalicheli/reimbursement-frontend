import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAdminsResponse();
  }

  private getUsersResponse() {
    this.employeeService.getUserList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  private getAdminsResponse() {
    this.employeeService.getAdminsList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  private getEmployeesResponse() {
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }
}
