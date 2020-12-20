import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UgStudentsComponent } from './ug-students.component';

describe('UgStudentsComponent', () => {
  let component: UgStudentsComponent;
  let fixture: ComponentFixture<UgStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
