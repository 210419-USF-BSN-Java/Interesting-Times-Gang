import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image';
import { ApiServiceService } from '../../services/api-service.service';
import { Tool } from '../tool-components/tool';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() currentToolDashboard?: Tool;
  @Input() currentComponent: string = "default"; //sets default to single image component

  constructor(private apiService: ApiServiceService) { }
  currentDayImg?: Image;
  imgObservable!: Array<Image>;
  extension = '?userId=2';

  img?: Image;
  imgA!: Array<Image>;

  url = 'http://localhost:8080/image/random/?userId=2';
  ngOnInit(): void {
    this.apiService.getImage(this.extension)
      .subscribe((data: Array<Image>) => {
        this.imgObservable = data;
        this.currentDayImg = this.imgObservable[0];
      });
  }

  dashboardAcceptTool(tool: Tool): void {
    this.currentToolDashboard = tool;
    this.currentComponent = tool.title || "default";
  }
}