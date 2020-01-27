import { Component, OnInit } from '@angular/core';

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

  onSayHi(){
    alert(this.myApp + this.onGetName())
  }

  onGetName(): string{
    return "yai";
  }

}
