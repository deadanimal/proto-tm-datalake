import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsDataSurvivorshipComponent } from './ds-data-survivorship.component';

describe('DsDataSurvivorshipComponent', () => {
  let component: DsDataSurvivorshipComponent;
  let fixture: ComponentFixture<DsDataSurvivorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsDataSurvivorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsDataSurvivorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
