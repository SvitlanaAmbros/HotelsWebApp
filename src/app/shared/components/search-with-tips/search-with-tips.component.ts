import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'search-with-tips',
  templateUrl: './search-with-tips.component.html',
  styleUrls: ['./search-with-tips.component.scss']
})
export class SearchWithTipsComponent implements OnInit {

  @Input() valuesTitle: string = 'values';
  @Input() baseList: string[];
  @Input() inputPlaceholder:string = 'Enter value';
  @Output() valueInputed: EventEmitter<string> = new EventEmitter();

  public filteredList:string[]=[];
  public isInputed: boolean = false;
  public inputedValue:string = '';

  constructor() { }

  ngOnInit() {
    this.filteredList = [...this.baseList];
  }

  //if base list updated
  ngOnChanges() {
    this.inputedValue = '';
    this.filteredList = [...this.baseList];
  }

  public changedInput() {
    if (this.inputedValue.length == 0) {
      this.filteredList = [...this.baseList];;
    } else {
      this.filteredList = this.baseList.filter((item:string) => 
                item.toLowerCase()
                    .includes(this.inputedValue.toLowerCase()));
      console.log(this.filteredList);
    }
  }

  public itemClicked(item: string) {
    this.inputedValue = item;
    this.emitValueInput();
  }

  public focusOut() {
    let ind = this.baseList.map(item => item.toLowerCase()).indexOf(this.inputedValue.toLowerCase());

    if(ind != -1) {
      this.inputedValue = this.baseList[ind];
      this.emitValueInput();
    } else {
      // this.inputedValue = '';
      // this.emitValueInput();
    }
  }

  public emitValueInput() {
    this.valueInputed.emit(this.inputedValue);
  }
}
