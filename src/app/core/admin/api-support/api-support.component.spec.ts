import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSupportComponent } from './api-support.component';

describe('ApiSupportComponent', () => {
  let component: ApiSupportComponent;
  let fixture: ComponentFixture<ApiSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
