import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentKeyMapsComponent } from './management-environment-key-maps.component';

describe('ManagementEnvironmentKeyMapsComponent', () => {
  let component: ManagementEnvironmentKeyMapsComponent;
  let fixture: ComponentFixture<ManagementEnvironmentKeyMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentKeyMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentKeyMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
