import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishDevelopersComponent } from './publish-developers.component';

describe('PublishDevelopersComponent', () => {
  let component: PublishDevelopersComponent;
  let fixture: ComponentFixture<PublishDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
