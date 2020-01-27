import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myApp = "POS";

  constructor() { }

  ngOnInit() {
  }

  onSayHi() {
    //alert(this.myApp + this.onGetName())
  }

  onGetName(): string {
    return "yai";
  }

  // any (default)
  login(loginForm: NgForm) {
    alert(JSON.stringify(loginForm.value))
  }

}
