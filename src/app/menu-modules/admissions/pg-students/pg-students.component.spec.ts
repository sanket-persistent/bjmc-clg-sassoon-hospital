import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgStudentsComponent } from './pg-students.component';

describe('PgStudentsComponent', () => {
  let component: PgStudentsComponent;
  let fixture: ComponentFixture<PgStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
