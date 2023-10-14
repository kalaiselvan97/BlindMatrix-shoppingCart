import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product-list/product-list.component';

const routes: Routes = [{
  path:"",component:ProductComponent
},{
  path:"product",component:ProductComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
