import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataMngComponent } from './master-data-mng.component';

describe('MasterDataMngComponent', () => {
  let component: MasterDataMngComponent;
  let fixture: ComponentFixture<MasterDataMngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataMngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataMngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
