import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp = "POS";

  constructor(
    private router: Router,
    private authServive: AuthService,
    private networkService: NetworkService) {
  }

  ngOnInit() {
    if (this.authServive.isLogin()) {
      this.router.navigate(["/stock"])
    }
  }

  onSayHi() {
    //alert(this.myApp + this.onGetName())
  }

  onGetName(): string {
    return "yai";
  }

  // any (default)
  login(loginForm: NgForm) {
    this.networkService.login(loginForm.value).subscribe(
      result => {
        if (result.token) {
          this.authServive.login(result.token);
        } else {
          alert(result.message);
        }
      },
      error => {
        alert(error.error.message);
      }
    )
  }

}
