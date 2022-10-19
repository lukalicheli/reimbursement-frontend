import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { ReimbService } from 'src/app/services/reimb.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css'],
})
export class ReimbursementListComponent implements OnInit {
  reimbResponse!: ReimbResponse[];

  constructor(private reimbService: ReimbService, private router: Router) {}

  ngOnInit(): void {
    this.getAllReimbursements();
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

}
