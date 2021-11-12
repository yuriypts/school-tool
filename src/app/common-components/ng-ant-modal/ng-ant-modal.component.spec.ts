import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAntModalComponent } from './ng-ant-modal.component';

describe('NgAntModalComponent', () => {
  let component: NgAntModalComponent;
  let fixture: ComponentFixture<NgAntModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAntModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAntModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
