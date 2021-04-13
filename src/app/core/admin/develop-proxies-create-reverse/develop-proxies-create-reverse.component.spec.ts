import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopProxiesCreateReverseComponent } from './develop-proxies-create-reverse.component';

describe('DevelopProxiesCreateReverseComponent', () => {
  let component: DevelopProxiesCreateReverseComponent;
  let fixture: ComponentFixture<DevelopProxiesCreateReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopProxiesCreateReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopProxiesCreateReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
