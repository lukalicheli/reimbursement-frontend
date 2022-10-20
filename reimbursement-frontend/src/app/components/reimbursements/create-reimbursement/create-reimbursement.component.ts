import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { ReimbService } from 'src/app/services/reimb.service';

@Component({
  selector: 'app-create-reimbursement',
  templateUrl: './create-reimbursement.component.html',
  styleUrls: ['./create-reimbursement.component.css'],
})
export class CreateReimbursementComponent implements OnInit {
  reimb: ReimbResponse = new ReimbResponse();

  constructor(private reimbService: ReimbService, private router: Router) {}

  ngOnInit(): void {}

  saveReimb() {
    this.reimbService.createReimbursement(this.reimb).subscribe(
      (data) => {
        console.log(data);
        this.goToReimbList();
      },
      (error) => console.log(error)
    );
  }

  goToReimbList() {
    this.router.navigate(['/reimbursement/employee']);
  }

  onSubmit() {
    console.log(this.reimb);
    this.saveReimb();
  }

}
