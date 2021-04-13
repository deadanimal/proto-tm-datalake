import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentReferenceComponent } from './management-environment-reference.component';

describe('ManagementEnvironmentReferenceComponent', () => {
  let component: ManagementEnvironmentReferenceComponent;
  let fixture: ComponentFixture<ManagementEnvironmentReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
