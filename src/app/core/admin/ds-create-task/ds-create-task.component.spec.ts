import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsCreateTaskComponent } from './ds-create-task.component';

describe('DsCreateTaskComponent', () => {
  let component: DsCreateTaskComponent;
  let fixture: ComponentFixture<DsCreateTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsCreateTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsCreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
