import { Component, OnInit } from '@angular/core';
import { ReimbService } from 'src/app/services/reimb.service';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-reimbursements',
  templateUrl: './pending-reimbursements.component.html',
  styleUrls: ['./pending-reimbursements.component.css']
})
export class PendingReimbursementsComponent implements OnInit {
  reimbResponse!: ReimbResponse[];

  constructor(private reimbService: ReimbService) { }

  ngOnInit(): void {
    this.getAllPendingReimbursements();
  }

  private getAllPendingReimbursements() {
    this.reimbService.getPendingList().subscribe((data) => {
      this.reimbResponse = data;
    });
  }

}
