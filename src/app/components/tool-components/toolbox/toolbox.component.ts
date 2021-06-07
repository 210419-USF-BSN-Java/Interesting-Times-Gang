import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
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
  @Output() tellToolBar = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showThisToolbox(){
    this.tellToolBar.emit(this.title);
  }

  logout(){
    sessionStorage.clear;
    this.router.navigate("");
  }
}
