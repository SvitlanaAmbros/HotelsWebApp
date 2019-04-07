import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: String[] = ['slider_0.jpg', 'slider_1.jpg', 'slider_2.jpg', 'slider_3.jpg'];
  public currentImgInd = 0;

  constructor() { }

  ngOnInit() {
  }

  public updateImage(ind: number): void {
    this.currentImgInd = ind;
  }

  public prevImage(): void {
    if (this.currentImgInd < 1) {
      this.currentImgInd = this.images.length - 1;
    } else {
      this.currentImgInd = this.currentImgInd - 1;
    }

  }

  public nextImage(): void {
    if (this.currentImgInd == this.images.length - 1) {
      this.currentImgInd = 0;
    } else {
      this.currentImgInd = this.currentImgInd + 1;
    }
  }

}
