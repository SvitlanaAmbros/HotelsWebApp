import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

  @Input() name: string = 'Button';
  @Output() click = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public clicked(): void {
    this.click.emit();
  }

}
