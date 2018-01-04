import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsOfferItemsComponent } from './donations-offer-items.component';

describe('DonationsOfferItemsComponent', () => {
  let component: DonationsOfferItemsComponent;
  let fixture: ComponentFixture<DonationsOfferItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsOfferItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsOfferItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
