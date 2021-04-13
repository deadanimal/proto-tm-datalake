import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmlCollaborationComponent } from './aml-collaboration.component';

describe('AmlCollaborationComponent', () => {
  let component: AmlCollaborationComponent;
  let fixture: ComponentFixture<AmlCollaborationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmlCollaborationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmlCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
