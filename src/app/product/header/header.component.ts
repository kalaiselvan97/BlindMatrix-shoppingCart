import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username!: string ;

  constructor(public route: Router) {}

  getUsername() {
    this.username = localStorage.getItem('username') || "";
    this.username =  this.username?.slice(0,this.username.indexOf('@'));
  }

  ngDoCheck() {
    this.getUsername();
  }

  gotoProductList() {
    this.route.navigate(['/product']);
  }
}
