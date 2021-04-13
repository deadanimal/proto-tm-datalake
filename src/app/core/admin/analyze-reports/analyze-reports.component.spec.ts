import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeReportsComponent } from './analyze-reports.component';

describe('AnalyzeReportsComponent', () => {
  let component: AnalyzeReportsComponent;
  let fixture: ComponentFixture<AnalyzeReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
