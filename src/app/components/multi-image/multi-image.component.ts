import { Component, OnInit } from '@angular/core';
import { images, DailyImage } from '../images';

@Component({
  selector: 'app-multi-image',
  templateUrl: './multi-image.component.html',
  styleUrls: ['./multi-image.component.css']
})
export class MultiImageComponent {
  imageArray = images;
  currentImg?: DailyImage;
  selectImg(image: DailyImage) {
    this.currentImg = image;
    console.log(this.currentImg);
  }
}
