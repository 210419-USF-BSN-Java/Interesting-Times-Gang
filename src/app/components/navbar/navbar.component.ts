import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showToolbar: boolean = false;
  title?: string = sessionStorage.getItem("user") || "";
  @Input() currentComponent: string = "";
  @Output() emitComponentName = new EventEmitter<string>();


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let userAlbumsUrl = ("http://localhost:8080/album/?id=" + sessionStorage.getItem("userId"));
    this.http.get<Album[]>(userAlbumsUrl).subscribe(
      response => {
        console.log(response);
        return response;
      }
    );
  }

  toggleToolbar(): void {
    if (this.showToolbar) {
      this.showToolbar = false;
    } else {
      this.showToolbar = true;
    }
  }

  setTitle(title: string): void {
    this.title = title;
    this.emitComponentName.emit(title);
  }

}
