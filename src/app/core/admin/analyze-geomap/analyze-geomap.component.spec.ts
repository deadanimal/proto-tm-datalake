import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeGeomapComponent } from './analyze-geomap.component';

describe('AnalyzeGeomapComponent', () => {
  let component: AnalyzeGeomapComponent;
  let fixture: ComponentFixture<AnalyzeGeomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeGeomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeGeomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
