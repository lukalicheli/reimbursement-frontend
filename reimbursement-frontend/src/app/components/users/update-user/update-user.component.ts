import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResponse } from 'src/app/models/user-response';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  username!: string;
  user: UserResponse = new UserResponse();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    this.employeeService.updateUserActivationByUsername(this.username).subscribe(data => {
      this.user = data;
    },error => console.log(error));
  }

  onSubmit(){
    /*console.log(this.user);
    this.saveUser();*/
  }

}
