import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {
  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getActiveResponse();
  }

  private getActiveResponse() {
    this.employeeService.getActiveList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }

}
