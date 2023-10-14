import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  public productDetail: any;
  id: any;

  constructor(
    public activeRoute: ActivatedRoute,
    public service: ProductService,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((obj) => {
      this.id = obj['id'];
      this.getOneProduct();
    });
  }

  getOneProduct() {
    this.service.getProductOne(this.id).subscribe((obj) => {
      this.productDetail = obj;
    });
  }
  gotoProductList() {
    this.route.navigate(['/product']);
  }
}
