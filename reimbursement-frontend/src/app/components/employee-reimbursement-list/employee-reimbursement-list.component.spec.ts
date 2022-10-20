import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReimbursementListComponent } from './employee-reimbursement-list.component';

describe('EmployeeReimbursementListComponent', () => {
  let component: EmployeeReimbursementListComponent;
  let fixture: ComponentFixture<EmployeeReimbursementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeReimbursementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeReimbursementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
