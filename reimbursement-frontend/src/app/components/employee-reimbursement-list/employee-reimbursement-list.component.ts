import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { UpdateReimbBody } from 'src/app/models/update-reimb-body';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ReimbService } from 'src/app/services/reimb.service';

@Component({
  selector: 'app-employee-reimbursement-list',
  templateUrl: './employee-reimbursement-list.component.html',
  styleUrls: ['./employee-reimbursement-list.component.css'],
})
export class EmployeeReimbursementListComponent implements OnInit {
  reimbResponse!: ReimbResponse[];
  
  form: UpdateReimbBody = {
    reimbursementID: '',
    statusUpdate: ''
  };

  constructor(private reimbService: ReimbService, 
    private router: Router, 
    private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.getAllReimbursements();
  }

  popUp(input: any){
    alert(
      "ID: " + input.reimbID+ 
      "\nType: " + input.type+
      "\nStatus: " + input.status+
      "\nAmount: $" + input.amount+ 
      "\nDescription: " + input.description+
      "\nSubmit Time: " + input.submitted+ 
      "\nAuthorID: " + input.authorID+
      "\nResolved Time: " + input.resolved+
      "\nResolverID: "+ input.resolverID)
  }

  getAllReimbursements() {
    this.reimbService.getOwnedReimbList(this.authService.getData().username).subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllPendingReimbursements() {
    this.reimbService.getOwnedPendingList(this.authService.getData().username).subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllDeniedReimbursements() {
    this.reimbService.getOwnedDeniedList(this.authService.getData().username).subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllApprovedReimbursements() {
    this.reimbService.getOwnedApprovedList(this.authService.getData().username).subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  
}
