import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosAndPptsComponent } from './videos-and-ppts.component';

describe('VideosAndPptsComponent', () => {
  let component: VideosAndPptsComponent;
  let fixture: ComponentFixture<VideosAndPptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosAndPptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosAndPptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
