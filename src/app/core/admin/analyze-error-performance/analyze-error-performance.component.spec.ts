import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeErrorPerformanceComponent } from './analyze-error-performance.component';

describe('AnalyzeErrorPerformanceComponent', () => {
  let component: AnalyzeErrorPerformanceComponent;
  let fixture: ComponentFixture<AnalyzeErrorPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeErrorPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeErrorPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
