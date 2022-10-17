import { Component, OnInit } from '@angular/core';
import { ReimbResponse } from 'src/app/models/reimb-response';
import { ReimbService } from 'src/app/services/reimb.service';

@Component({
  selector: 'app-reimbursement-list',
  templateUrl: './reimbursement-list.component.html',
  styleUrls: ['./reimbursement-list.component.css']
})
export class ReimbursementListComponent implements OnInit {
  reimbResponse!: ReimbResponse[];

  constructor(private reimbService: ReimbService) { }

  ngOnInit(): void {
    this.getAllReimbursements();
  }

  private getAllReimbursements() {
    this.reimbService.getReimbList().subscribe(data => {
      this.reimbResponse = data;
    });
  }

}
