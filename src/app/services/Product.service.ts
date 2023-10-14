import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductOne(id: any): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
}
