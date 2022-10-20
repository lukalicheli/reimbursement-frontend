import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { UpdateUserBody } from 'src/app/models/update-user-body';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersResponse!: UserResponse[];

  form: UpdateUserBody = {
    userId: '',
    givenName: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    roleName: '',
    isActive: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsersResponse();
  }

  getUsersResponse() {
    this.employeeService.getUserList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  getActiveResponse(){
    this.employeeService.getActiveList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  getInactiveResponse(){
    this.employeeService.getInactiveList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  getAdminResponse(){
    this.employeeService.getAdminsList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  getFinanceManagerResponse(){
    this.employeeService.getFinanceManagersList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  getEmployeeResponse(){
    this.employeeService.getEmployeesList().subscribe((data) => {
      this.usersResponse = data;
    });
  }

  updateUserStatus(username: string, isActive: boolean) {
    this.form.username = username;

    if(isActive) {
      this.form.isActive = "false";
    } else {
      this.form.isActive = "true"; 
    }
    
    this.employeeService.updateUser(this.form).subscribe((data) => {
      console.log(this.form);
      console.log(data);
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/users']);
    });
      
    });
    
  }

  updateUserRole(username: string, role: string, value: string) {
    this.form.roleName = value;
    this.form.username = username; 

    console.log(this.form);
    console.log(this.form.roleName);
    

    if(value == "admin") {
      this.form.roleName = "admin";
    } else if(value == "finance manager") {
      this.form.roleName = "finance manager"; 
    } else if(value == "employee") {
      this.form.roleName = "employee";
    }
    
    this.employeeService.updateUser(this.form).subscribe((data) => {
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/users']);
    });
      
    });
    
  }
}