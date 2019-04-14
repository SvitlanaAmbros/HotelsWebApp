import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithTipsComponent } from './search-with-tips.component';

describe('SearchWithTipsComponent', () => {
  let component: SearchWithTipsComponent;
  let fixture: ComponentFixture<SearchWithTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWithTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
