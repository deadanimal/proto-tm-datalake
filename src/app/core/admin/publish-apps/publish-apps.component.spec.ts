import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAppsComponent } from './publish-apps.component';

describe('PublishAppsComponent', () => {
  let component: PublishAppsComponent;
  let fixture: ComponentFixture<PublishAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
