import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeTargetPerformanceComponent } from './analyze-target-performance.component';

describe('AnalyzeTargetPerformanceComponent', () => {
  let component: AnalyzeTargetPerformanceComponent;
  let fixture: ComponentFixture<AnalyzeTargetPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeTargetPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeTargetPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
