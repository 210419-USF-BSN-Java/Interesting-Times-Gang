import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showToolbar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleToolbar(): void {
    if (this.showToolbar) {
      this.showToolbar = false;
    } else {
      this.showToolbar = true;
    }
  }

}
