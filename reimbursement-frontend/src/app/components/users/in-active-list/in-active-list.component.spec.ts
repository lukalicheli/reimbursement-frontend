import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveListComponent } from './in-active-list.component';

describe('InActiveListComponent', () => {
  let component: InActiveListComponent;
  let fixture: ComponentFixture<InActiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InActiveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
