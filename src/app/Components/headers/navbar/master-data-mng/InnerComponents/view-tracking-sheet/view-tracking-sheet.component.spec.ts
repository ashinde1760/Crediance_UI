import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackingSheetComponent } from './view-tracking-sheet.component';

describe('ViewTrackingSheetComponent', () => {
  let component: ViewTrackingSheetComponent;
  let fixture: ComponentFixture<ViewTrackingSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTrackingSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrackingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
