import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDetailComponent } from './about-us-detail.component';

describe('AboutUsDetailComponent', () => {
  let component: AboutUsDetailComponent;
  let fixture: ComponentFixture<AboutUsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
