import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter01DiceComponent } from './chapter01-dice.component';

describe('Chapter01DiceComponent', () => {
  let component: Chapter01DiceComponent;
  let fixture: ComponentFixture<Chapter01DiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter01DiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter01DiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
