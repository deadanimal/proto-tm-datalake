import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDomainCoverageComponent } from './data-domain-coverage.component';

describe('DataDomainCoverageComponent', () => {
  let component: DataDomainCoverageComponent;
  let fixture: ComponentFixture<DataDomainCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDomainCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDomainCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
