import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersResponse!: UserResponse[];

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit(): void {
    this.getUsersResponse();
  }


 private getUsersResponse(){
    this.employeeService.getUserList().subscribe(data => {
      this.usersResponse = data;
    });

  }
}


