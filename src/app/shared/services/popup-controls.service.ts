import { Injectable } from '@angular/core';

@Injectable()
export class PopupControlsService {
  public create(): PopupControls {
    return new PopupControls();
  }
}

export class PopupControls {
  public isOpened: boolean;

  constructor() {
    this.isOpened = false;
  }

  public open() {
    this.isOpened = true;
  }

  public close() {
    this.isOpened = false;
  }

  public popupIsOpened() {
    return this.isOpened;
  }
}
