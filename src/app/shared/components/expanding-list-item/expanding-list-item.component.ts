import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expanding-list-item',
  templateUrl: './expanding-list-item.component.html',
  styleUrls: ['./expanding-list-item.component.scss']
})
export class ExpandingListItemComponent implements OnInit {

  @Input() listItem;
  @Input() id;

  constructor() { }

  ngOnInit() {
  }

}
