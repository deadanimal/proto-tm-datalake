import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopFlowsComponent } from './develop-flows.component';

describe('DevelopFlowsComponent', () => {
  let component: DevelopFlowsComponent;
  let fixture: ComponentFixture<DevelopFlowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopFlowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
