import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankStatementComponent } from './view-bank-statement.component';

describe('ViewBankStatementComponent', () => {
  let component: ViewBankStatementComponent;
  let fixture: ComponentFixture<ViewBankStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBankStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBankStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
