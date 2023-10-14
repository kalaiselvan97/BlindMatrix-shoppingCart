import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductComponent {
  public productList: any;
  public pagination: number = 1;
  public paginationArray: number[] = [1, 2, 3, 4, 5, 6];
  public selectedItem: any[] = [];
  constructor(public service: ProductService, public route: Router) {}
  ngOnInit(): void {
    this.getAllProductList();
  }

  getAllProductList() {
    this.service.getProductList().subscribe({
      next: (result: any) => {
        this.productList = result;
        this.productList.map((x: any) => (x.count = 0));
        console.log(this.productList);
      },
      complete() {},
    });
  }

  viewItem(id: any): void {
    this.route.navigate([`/view/${id}`]);
  }

  addToCart(item: any) {
    let flag = this.selectedItem.find((x: any) => x == item);
    if (!flag) {
      item.count = 1;
      this.selectedItem.push(item);
    }
  }

  paginationChange(number: number) {
    if (number !=1 && number !=2 && number !=3 ) {
      this.paginationArray = [];

      for (let i = 0; i < 6; i++) {
        this.paginationArray.push(number + i - 2);
      }
    }else{
      this.paginationArray = [1,2,3,4,5,6];
    }
    this.pagination = number;
  }
}
