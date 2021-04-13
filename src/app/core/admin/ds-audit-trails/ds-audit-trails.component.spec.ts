import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsAuditTrailsComponent } from './ds-audit-trails.component';

describe('DsAuditTrailsComponent', () => {
  let component: DsAuditTrailsComponent;
  let fixture: ComponentFixture<DsAuditTrailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsAuditTrailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsAuditTrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
