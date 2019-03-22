import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristsDetailComponent } from './tourists-detail.component';

describe('TouristsDetailComponent', () => {
  let component: TouristsDetailComponent;
  let fixture: ComponentFixture<TouristsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
