import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProductsAddComponent } from './publish-products-add.component';

describe('PublishProductsAddComponent', () => {
  let component: PublishProductsAddComponent;
  let fixture: ComponentFixture<PublishProductsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishProductsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishProductsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
