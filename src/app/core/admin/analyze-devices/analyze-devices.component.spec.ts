import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeDevicesComponent } from './analyze-devices.component';

describe('AnalyzeDevicesComponent', () => {
  let component: AnalyzeDevicesComponent;
  let fixture: ComponentFixture<AnalyzeDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
