import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeesResponse();
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
