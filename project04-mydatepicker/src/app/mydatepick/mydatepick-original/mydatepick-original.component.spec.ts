import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydatepickOriginalComponent } from './mydatepick-original.component';

describe('MydatepickOriginalComponent', () => {
  let component: MydatepickOriginalComponent;
  let fixture: ComponentFixture<MydatepickOriginalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydatepickOriginalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydatepickOriginalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
