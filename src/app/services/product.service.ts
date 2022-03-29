import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../Interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: ProductInterface[] = [];
  isLoading: boolean= false;
  constructor(private http: HttpClient) {
    this.isLoading= true;
    this.load();
  }

  private load() {
    this.http.get('https://crapp-18-default-rtdb.firebaseio.com/product_idx.json').subscribe((result:any) => {
      this.items = result;
      this.isLoading = false;
      console.log(this.items);
    });
  }
}

//https://crapp-18-default-rtdb.firebaseio.com/product.json