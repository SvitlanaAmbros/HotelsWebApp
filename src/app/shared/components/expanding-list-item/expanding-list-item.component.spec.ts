import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingListItemComponent } from './expanding-list-item.component';

describe('ExpandingListItemComponent', () => {
  let component: ExpandingListItemComponent;
  let fixture: ComponentFixture<ExpandingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
