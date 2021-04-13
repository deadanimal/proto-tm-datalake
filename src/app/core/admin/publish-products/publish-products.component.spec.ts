import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProductsComponent } from './publish-products.component';

describe('PublishProductsComponent', () => {
  let component: PublishProductsComponent;
  let fixture: ComponentFixture<PublishProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
