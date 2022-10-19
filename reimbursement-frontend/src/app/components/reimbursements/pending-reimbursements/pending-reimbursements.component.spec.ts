import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReimbursementsComponent } from './pending-reimbursements.component';

describe('PendingReimbursementsComponent', () => {
  let component: PendingReimbursementsComponent;
  let fixture: ComponentFixture<PendingReimbursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingReimbursementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingReimbursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
