import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.css']
})
export class UpdateInfoComponent implements OnInit {
  user: User = {
    userId: 0,
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    roleId: 1,
  };
  message: string = "";
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe(
      response => {
        if (response != null) {
          this.user = response;
        } else {
          this.message = "Sorry, something went wrong!"
        }
      }
    );
  }

  update() {
    if (this.user != null) {
      this.auth.updateInfo(this.user).subscribe(
        response => this.user = response,
      )
    } else {
      this.message = "Please complete the form!";
    }
  }


}
