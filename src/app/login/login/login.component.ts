import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public patter: any;
  public loginForm!: FormGroup;

  constructor(public formbuilder: FormBuilder, public route: Router) {}
  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.formbuilder.group({
      userName: [null, [Validators.required,Validators.email]],
      password: [null, [Validators.required,Validators.minLength(11)]],
    });
  }
  submitLoad() {
    if (this.loginForm.valid && this.loginForm.value.password =="Welcome@123") {
      localStorage.setItem('username', this.loginForm.value.userName);
      localStorage.setItem('password', this.loginForm.value.password);
      this.route.navigate(['/product']);
    }
  }
}
