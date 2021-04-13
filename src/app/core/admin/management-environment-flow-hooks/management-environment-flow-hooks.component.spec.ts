import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentFlowHooksComponent } from './management-environment-flow-hooks.component';

describe('ManagementEnvironmentFlowHooksComponent', () => {
  let component: ManagementEnvironmentFlowHooksComponent;
  let fixture: ComponentFixture<ManagementEnvironmentFlowHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentFlowHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentFlowHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
