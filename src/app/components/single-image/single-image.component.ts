import { Component, OnChanges, Input } from '@angular/core';
import { images, albums, DailyImage } from '../../images';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css'],
})

export class SingleImageComponent implements OnChanges {
  // @Input() image?: DailyImage;
  imageArray = images;
  image: DailyImage = this.imageArray[0];
  albums = albums;
  hoveredRating: number = 0;
  finalRating: number = 0;
  alertStr: string = "";
  dropdown: string = "";

  mouseEnter(num: number) {
    if (this.finalRating == 0)
      this.hoveredRating = num;
    else
      this.hoveredRating = this.finalRating;
  }
  resetHoveredRating() {
    if (this.finalRating == 0)
      this.hoveredRating = 0;
    else
      this.hoveredRating = this.finalRating;
  }
  setFinalRating(num: number) {
    this.finalRating = num;
    this.alertStr = `You have given <b>${this.image?.title}</b> a <b>${this.finalRating}-star rating</b>.`;
  }
  addTo(album: string) {
    this.alertStr = `You have added <b>${this.image?.title}</b> to <b>${album}</b>.`;
  }
  showAlbum() {
    this.dropdown = 'block';
  }
  hideAlbum() {
    this.dropdown = 'none';
  }
  ngOnChanges() {
    this.hoveredRating = 0;
    this.finalRating = 0;
    this.alertStr = "";
  }
}