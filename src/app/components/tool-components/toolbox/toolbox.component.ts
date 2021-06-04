import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Tool } from '../tool';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  @Input() title?: string;
  @Input() toolbox?: Tool[];
  @Input() selectedToolbox?: string;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }



}
