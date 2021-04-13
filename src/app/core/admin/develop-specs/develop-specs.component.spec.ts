import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopSpecsComponent } from './develop-specs.component';

describe('DevelopSpecsComponent', () => {
  let component: DevelopSpecsComponent;
  let fixture: ComponentFixture<DevelopSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
