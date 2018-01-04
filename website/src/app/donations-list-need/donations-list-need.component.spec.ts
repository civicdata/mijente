import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsListNeedComponent } from './donations-list-need.component';

describe('DonationsListNeedComponent', () => {
  let component: DonationsListNeedComponent;
  let fixture: ComponentFixture<DonationsListNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsListNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsListNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
