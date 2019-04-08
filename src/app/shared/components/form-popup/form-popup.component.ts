import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-popup',
  templateUrl: './form-popup.component.html',
  styleUrls: ['./form-popup.component.scss']
})
export class FormPopupComponent implements OnInit {
  public generatedId: string;

  @Input() public position?: string;
  @Input() public header: string;
  @Input() public buttonAction: string;
  @Input() public buttonCancel: string;
  @Input() public isDisabled: boolean;

  @Output() public onAction = new EventEmitter<void>();
  @Output() public onClose = new EventEmitter<void>();

  public config = {
    position: 'center-center' || 'center-top'
  };

  constructor(/*private popupService: PopupService*/) { }

  ngOnInit() {
    this.initConfig();
    // this.generatedId =  this.popupService.generateId('form');
    // this.isDisabled = true;
  }

  private initConfig() {
    
    this.config = {
      position: this.position || 'center-center'
    }

  }

  public closeOutside (event) {
    this.onClose.emit();
  }

  public action() {
    this.onAction.emit();
  }

  public close() {
    this.onClose.emit();
  }

}
