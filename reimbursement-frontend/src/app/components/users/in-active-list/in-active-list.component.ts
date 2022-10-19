import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-in-active-list',
  templateUrl: './in-active-list.component.html',
  styleUrls: ['./in-active-list.component.css']
})
export class InActiveListComponent implements OnInit {

  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getInactiveResponse();
  }

  private getInactiveResponse() {
    this.employeeService.getInactiveList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }

}
