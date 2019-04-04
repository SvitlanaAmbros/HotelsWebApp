import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() name: string = 'Button';

  constructor() { }

  ngOnInit() {
  }

}
