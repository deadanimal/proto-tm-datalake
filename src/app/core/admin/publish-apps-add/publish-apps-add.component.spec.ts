import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAppsAddComponent } from './publish-apps-add.component';

describe('PublishAppsAddComponent', () => {
  let component: PublishAppsAddComponent;
  let fixture: ComponentFixture<PublishAppsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishAppsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAppsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
