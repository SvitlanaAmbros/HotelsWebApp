import { Injectable } from '@angular/core';

@Injectable()
export class IdGeneratorService {

  constructor() { }

  public generateId (pref) {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let idSize = 5;
    let key = `${pref}-`;

    for (let i = 0; i < idSize; i++) {
      key += getRandomInt(1, 5);
    }

    return key;
  };

}
