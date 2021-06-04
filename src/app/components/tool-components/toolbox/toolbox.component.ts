import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input() title?: string;
  @Input() toolList ?: {};

  constructor() { }

  ngOnInit(): void {
  }

}
