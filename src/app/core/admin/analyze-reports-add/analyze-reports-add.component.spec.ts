import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeReportsAddComponent } from './analyze-reports-add.component';

describe('AnalyzeReportsAddComponent', () => {
  let component: AnalyzeReportsAddComponent;
  let fixture: ComponentFixture<AnalyzeReportsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeReportsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeReportsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
