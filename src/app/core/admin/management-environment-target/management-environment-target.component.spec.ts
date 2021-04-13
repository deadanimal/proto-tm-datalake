import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentTargetComponent } from './management-environment-target.component';

describe('ManagementEnvironmentTargetComponent', () => {
  let component: ManagementEnvironmentTargetComponent;
  let fixture: ComponentFixture<ManagementEnvironmentTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
