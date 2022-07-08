import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferLetterComponent } from './view-offer-letter.component';

describe('ViewOfferLetterComponent', () => {
  let component: ViewOfferLetterComponent;
  let fixture: ComponentFixture<ViewOfferLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOfferLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOfferLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
