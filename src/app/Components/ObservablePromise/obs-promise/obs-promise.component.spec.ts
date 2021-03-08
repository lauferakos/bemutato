import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsPromiseComponent } from './obs-promise.component';

describe('ObsPromiseComponent', () => {
  let component: ObsPromiseComponent;
  let fixture: ComponentFixture<ObsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
