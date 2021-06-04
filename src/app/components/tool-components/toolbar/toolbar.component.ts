import { Component, Input, OnInit } from '@angular/core';
import { accountTools } from '../account-tools';
import { albumsTools } from '../albumsTools';
import { infoTools } from '../infoTools';
import { searchTools } from '../search-tools';
import { Tool } from '../tool';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() show: Boolean = false;
  accountToolBox: Tool[] = accountTools;
  searchToolBox: Tool[] = searchTools;
  albumsToolBox: Tool[] = albumsTools;
  infoToolBox: Tool[] = infoTools;
  selectedToolBox: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  OnNotify(toolBoxTitle: string){
    this.selectedToolBox = toolBoxTitle;
  }
}
