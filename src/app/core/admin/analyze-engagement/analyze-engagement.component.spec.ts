import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeEngagementComponent } from './analyze-engagement.component';

describe('AnalyzeEngagementComponent', () => {
  let component: AnalyzeEngagementComponent;
  let fixture: ComponentFixture<AnalyzeEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
