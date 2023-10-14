import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public patter:any;
  public loginForm:FormGroup;

  constructor( public formbuilder:FormBuilder,public route:Router  ){
    this.patter="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"
    this.loginForm= new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    

    })

  }
  ngOnInit():void {
    localStorage.clear();
  }
  submitLoad(){
    // console.log(this.loginForm.value);
    localStorage.setItem("username",this.loginForm.value.email)
    localStorage.setItem("password",this.loginForm.value.password)
    this.route.navigate(['/product'])

  }

}
