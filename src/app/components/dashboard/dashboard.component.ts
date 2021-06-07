import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ApiServiceService } from '../../services/api-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { }
  currentDayImg?: Image;
  imgObservable!: Array<Image>;
  extension = '?userId=2';
  ngOnInit(): void {
    this.apiService.getImage(this.extension)
    .subscribe((data: Array<Image>) => { this.imgObservable = data;
    this.currentDayImg = this.imgObservable[0]; }
    );
  }
}