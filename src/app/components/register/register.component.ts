import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  username: string = "";
  password: string = "";
  message: string = "";

  submitted: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if (!this.username) {
      return;
    }

    if (!this.password) {
      return;
    }

    if (!this.email) {
      return;
    }

    this.auth.register(
      this.firstname,
      this.lastname,
      this.email,
      this.username,
      this.password,
    ).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['login']); //need to route somewhere? dashboard maybe
      },
      err => {
        console.error("Error: " + err);
      },
      () => {
        console.log("Complete");
      }
    )
  }
}
