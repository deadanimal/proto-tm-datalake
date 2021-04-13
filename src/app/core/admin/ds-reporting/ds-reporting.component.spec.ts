import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsReportingComponent } from './ds-reporting.component';

describe('DsReportingComponent', () => {
  let component: DsReportingComponent;
  let fixture: ComponentFixture<DsReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
