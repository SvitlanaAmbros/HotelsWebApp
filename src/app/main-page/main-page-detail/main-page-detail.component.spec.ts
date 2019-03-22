import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDetailComponent } from './main-page-detail.component';

describe('MainPageDetailComponent', () => {
  let component: MainPageDetailComponent;
  let fixture: ComponentFixture<MainPageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
