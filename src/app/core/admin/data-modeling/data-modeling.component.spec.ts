import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelingComponent } from './data-modeling.component';

describe('DataModelingComponent', () => {
  let component: DataModelingComponent;
  let fixture: ComponentFixture<DataModelingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModelingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
