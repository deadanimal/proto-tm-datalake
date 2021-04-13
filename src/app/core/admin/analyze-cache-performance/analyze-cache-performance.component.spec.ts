import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeCachePerformanceComponent } from './analyze-cache-performance.component';

describe('AnalyzeCachePerformanceComponent', () => {
  let component: AnalyzeCachePerformanceComponent;
  let fixture: ComponentFixture<AnalyzeCachePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeCachePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeCachePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
