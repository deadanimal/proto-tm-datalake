import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeTrafficComponent } from './analyze-traffic.component';

describe('AnalyzeTrafficComponent', () => {
  let component: AnalyzeTrafficComponent;
  let fixture: ComponentFixture<AnalyzeTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
