import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-finance-manager-list',
  templateUrl: './finance-manager-list.component.html',
  styleUrls: ['./finance-manager-list.component.css'],
})
export class FinanceManagerListComponent implements OnInit {
  usersResponse!: UserResponse[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFinanceManagersResponse();
  }

  private getFinanceManagersResponse() {
    this.employeeService.getFinanceManagersList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  updateUser(isActive: boolean) {
    this.router.navigate(['users/update-user', isActive]);
  }
}
