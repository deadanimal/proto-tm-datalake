import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTaskManagementComponent } from './ui-task-management.component';

describe('UiTaskManagementComponent', () => {
  let component: UiTaskManagementComponent;
  let fixture: ComponentFixture<UiTaskManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTaskManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
