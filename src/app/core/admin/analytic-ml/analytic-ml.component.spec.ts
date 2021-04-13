import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticMlComponent } from './analytic-ml.component';

describe('AnalyticMlComponent', () => {
  let component: AnalyticMlComponent;
  let fixture: ComponentFixture<AnalyticMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
