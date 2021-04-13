import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWorkflowComponent } from './business-workflow.component';

describe('BusinessWorkflowComponent', () => {
  let component: BusinessWorkflowComponent;
  let fixture: ComponentFixture<BusinessWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
