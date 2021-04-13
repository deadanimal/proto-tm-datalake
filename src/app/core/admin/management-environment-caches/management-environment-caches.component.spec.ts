import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEnvironmentCachesComponent } from './management-environment-caches.component';

describe('ManagementEnvironmentCachesComponent', () => {
  let component: ManagementEnvironmentCachesComponent;
  let fixture: ComponentFixture<ManagementEnvironmentCachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementEnvironmentCachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementEnvironmentCachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
