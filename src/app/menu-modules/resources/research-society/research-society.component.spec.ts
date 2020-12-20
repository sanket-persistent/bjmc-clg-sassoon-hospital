import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSocietyComponent } from './research-society.component';

describe('ResearchSocietyComponent', () => {
  let component: ResearchSocietyComponent;
  let fixture: ComponentFixture<ResearchSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
