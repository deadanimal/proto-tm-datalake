import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdpaSupportComponent } from './pdpa-support.component';

describe('PdpaSupportComponent', () => {
  let component: PdpaSupportComponent;
  let fixture: ComponentFixture<PdpaSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdpaSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdpaSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
