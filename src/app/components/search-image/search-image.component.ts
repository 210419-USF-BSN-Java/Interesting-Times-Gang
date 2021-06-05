import { Component } from '@angular/core';


@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent {
  view: number = 1;
  tag = '';
  dateStr = '';
  date1Str = '';
  date2Str = '';
  date?: Date;
  date1?: Date;
  date2?: Date;

  changeView(num: number) {
    this.view = num;
    console.log(this.view);
  }
  search() {
    switch (this.view) {
      case 1 :
        console.log(this.tag);
        break;
      case 2 :
        if (this.dateStr) {
          this.date = new Date(this.dateStr);
          console.log(this.date);
        }
        break;
      case 3 :
        if (this.date1Str) {
          this.date1 = new Date(this.date1Str);
          console.log(this.date1);
        }
        if (this.date2Str) {
          this.date2 = new Date(this.date2Str);
          console.log(this.date2);
        }
        break;
    }
  }
}