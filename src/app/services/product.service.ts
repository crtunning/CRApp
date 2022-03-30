import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from '../Interface/product-interface';
import { ProductDetailInterface } from '../Interface/product-detail-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  item: ProductDetailInterface= {};
  itemsFiltered: ProductInterface[] = [];
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

  private reload(): any {
    const reloadObservable = new Observable(observer => {
      this.http.get('https://crapp-18-default-rtdb.firebaseio.com/product_idx.json').subscribe((result:any) => {
        observer.next(result);
        //this.isLoading = false;
        console.log("reload items",this.items);
     });
    });
    return reloadObservable;
  }

  public getDetail(id: String) {
    this.http.get('https://crapp-18-default-rtdb.firebaseio.com/product/' + id + '.json').subscribe((result:ProductDetailInterface) => {
      this.item = result;
      this.isLoading = false;
    });
  }

  public filter(value: string) {
    if(this.items.length < 1) {
      this.isLoading= true;
      const reload= this.reload();
      reload.subscribe((items: any) => {
        this.items= items;
        this.applyFilter(value);
      })
    } else {
      this.applyFilter(value);
    }

    
  }

  private applyFilter(value: string) {
    value= value.toLocaleUpperCase();
    this.itemsFiltered= this.items.filter( product => {
      const category= product.category?.toLocaleUpperCase();
      const title= product.title?.toLocaleUpperCase();
      const code= product.code?.toLocaleUpperCase();
      return (category?.indexOf(value) !== -1) || (title?.indexOf(value) !== -1) || (code?.indexOf(value) !== -1);
    });
  }
}