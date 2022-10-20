import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { UpdateReimbBody } from 'src/app/models/update-reimb-body';
import { ReimbService } from 'src/app/services/reimb.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css'],
})
export class ReimbursementListComponent implements OnInit {
  reimbResponse!: ReimbResponse[];

  form: UpdateReimbBody = {
    reimbursementID: '',
    statusUpdate: ''
  };

  constructor(private reimbService: ReimbService, private router: Router) {}

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
    this.reimbService.getReimbList().subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllPendingReimbursements() {
    this.reimbService.getPendingList().subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllDeniedReimbursements() {
    this.reimbService.getDeniedList().subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  getAllApprovedReimbursements() {
    this.reimbService.getApprovedList().subscribe((data) => {
      this.reimbResponse = data;
    });
  }

  updateReimbStatus(reimbID: string, status: string, value: string) {
    this.form.reimbursementID = reimbID;
    this.form.statusUpdate = status;
    console.log(reimbID);
    console.log(this.form);
    console.log(value);

    if(value == "approved") {
      this.form.statusUpdate = "true";
    } else if(value == "denied") {
      this.form.statusUpdate = "false"; 
    }
    
    this.reimbService.approveOrDeny(this.form).subscribe((data) => {
      console.log(this.form);
      console.log(data);
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/reimbursement']);
    });
      
    });
    
  }

}
