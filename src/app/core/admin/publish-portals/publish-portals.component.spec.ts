import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishPortalsComponent } from './publish-portals.component';

describe('PublishPortalsComponent', () => {
  let component: PublishPortalsComponent;
  let fixture: ComponentFixture<PublishPortalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishPortalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishPortalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
