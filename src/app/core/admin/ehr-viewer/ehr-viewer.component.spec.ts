import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrViewerComponent } from './ehr-viewer.component';

describe('EhrViewerComponent', () => {
  let component: EhrViewerComponent;
  let fixture: ComponentFixture<EhrViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhrViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhrViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
