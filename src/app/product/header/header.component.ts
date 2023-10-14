import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username!:string|null;
  constructor(public route:Router  ){}
  ngOnInit(){
  this.username  = localStorage.getItem("username");
  }

  ngDoCheck(){
    this.username  = localStorage.getItem("username");
  }
  gotoProductList(){
    this.route.navigate(['/product'])
  }
}
