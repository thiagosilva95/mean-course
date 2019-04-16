import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(public authService: AuthService) { }

  onLogin(form: NgForm) {
    if (!form.valid) {
      return
    }
    this.authService.login(form.value.email, form.value.password);
  }

  ngOnInit() {
  }

}
