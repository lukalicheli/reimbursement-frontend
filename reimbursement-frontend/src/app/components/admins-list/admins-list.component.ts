import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-admins-list',
  templateUrl: './admins-list.component.html',
  styleUrls: ['./admins-list.component.css']
})
export class AdminsListComponent implements OnInit {
  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAdminsResponse();
  }

  private getAdminsResponse() {
    this.employeeService.getAdminsList().subscribe((data) => {
      this.usersResponse = data;
    });
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
