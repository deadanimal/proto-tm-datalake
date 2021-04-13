import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopProxiesComponent } from './develop-proxies.component';

describe('DevelopProxiesComponent', () => {
  let component: DevelopProxiesComponent;
  let fixture: ComponentFixture<DevelopProxiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopProxiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopProxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
