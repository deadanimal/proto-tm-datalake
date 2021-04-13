import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMergeComponent } from './data-merge.component';

describe('DataMergeComponent', () => {
  let component: DataMergeComponent;
  let fixture: ComponentFixture<DataMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
