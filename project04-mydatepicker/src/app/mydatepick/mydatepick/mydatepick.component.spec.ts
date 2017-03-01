import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydatepickComponent } from './mydatepick.component';

describe('MydatepickComponent', () => {
  let component: MydatepickComponent;
  let fixture: ComponentFixture<MydatepickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydatepickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydatepickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
