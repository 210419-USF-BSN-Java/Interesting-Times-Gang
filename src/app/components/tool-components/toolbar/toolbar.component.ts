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
  accountToolbox: Tool[] = accountTools;
  searchToolbox: Tool[] = searchTools;
  albumsToolbox: Tool[] = albumsTools;
  infoToolbox: Tool[] = infoTools;
  selectedToolbox: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  selectToolbox(toolBoxTitle: string): void{
    this.selectedToolbox = toolBoxTitle;
  }
}
