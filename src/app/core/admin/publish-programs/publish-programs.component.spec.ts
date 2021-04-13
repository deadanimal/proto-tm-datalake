import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishProgramsComponent } from './publish-programs.component';

describe('PublishProgramsComponent', () => {
  let component: PublishProgramsComponent;
  let fixture: ComponentFixture<PublishProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
