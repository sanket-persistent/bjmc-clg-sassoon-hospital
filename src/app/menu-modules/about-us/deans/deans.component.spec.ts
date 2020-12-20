import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeansComponent } from './deans.component';

describe('DeansComponent', () => {
  let component: DeansComponent;
  let fixture: ComponentFixture<DeansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
