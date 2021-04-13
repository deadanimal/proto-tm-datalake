import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementVirtualComponent } from './management-virtual.component';

describe('ManagementVirtualComponent', () => {
  let component: ManagementVirtualComponent;
  let fixture: ComponentFixture<ManagementVirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementVirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
