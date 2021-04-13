import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopTracesComponent } from './develop-traces.component';

describe('DevelopTracesComponent', () => {
  let component: DevelopTracesComponent;
  let fixture: ComponentFixture<DevelopTracesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopTracesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
