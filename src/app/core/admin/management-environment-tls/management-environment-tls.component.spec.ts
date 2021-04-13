import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentTlsComponent } from './management-environment-tls.component';

describe('ManagementEnvironmentTlsComponent', () => {
  let component: ManagementEnvironmentTlsComponent;
  let fixture: ComponentFixture<ManagementEnvironmentTlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentTlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentTlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
