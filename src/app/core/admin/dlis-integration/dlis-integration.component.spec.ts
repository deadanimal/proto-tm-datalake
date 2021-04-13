import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlisIntegrationComponent } from './dlis-integration.component';

describe('DlisIntegrationComponent', () => {
  let component: DlisIntegrationComponent;
  let fixture: ComponentFixture<DlisIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlisIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlisIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
