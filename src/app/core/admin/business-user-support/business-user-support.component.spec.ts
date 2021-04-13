import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUserSupportComponent } from './business-user-support.component';

describe('BusinessUserSupportComponent', () => {
  let component: BusinessUserSupportComponent;
  let fixture: ComponentFixture<BusinessUserSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUserSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUserSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
