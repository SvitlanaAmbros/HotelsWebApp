import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristsQuestionsComponent } from './tourists-questions.component';

describe('TouristsQuestionsComponent', () => {
  let component: TouristsQuestionsComponent;
  let fixture: ComponentFixture<TouristsQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristsQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
