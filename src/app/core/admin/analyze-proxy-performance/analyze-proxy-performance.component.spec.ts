import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeProxyPerformanceComponent } from './analyze-proxy-performance.component';

describe('AnalyzeProxyPerformanceComponent', () => {
  let component: AnalyzeProxyPerformanceComponent;
  let fixture: ComponentFixture<AnalyzeProxyPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeProxyPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeProxyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
