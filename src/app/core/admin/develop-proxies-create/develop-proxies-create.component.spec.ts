import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopProxiesCreateComponent } from './develop-proxies-create.component';

describe('DevelopProxiesCreateComponent', () => {
  let component: DevelopProxiesCreateComponent;
  let fixture: ComponentFixture<DevelopProxiesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopProxiesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopProxiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
