import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalarySlipComponent } from './view-salary-slip.component';

describe('ViewSalarySlipComponent', () => {
  let component: ViewSalarySlipComponent;
  let fixture: ComponentFixture<ViewSalarySlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalarySlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSalarySlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
