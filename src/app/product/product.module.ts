import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { ProductComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [    
    ListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
