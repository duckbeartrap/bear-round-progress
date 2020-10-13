import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BearRoundProgressComponent } from './bear-round-progress.component';

describe('BearRoundProgressComponent', () => {
  let component: BearRoundProgressComponent;
  let fixture: ComponentFixture<BearRoundProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearRoundProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearRoundProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
