import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  value: string= "";

  constructor(private route: ActivatedRoute, public productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.value= params['value'];
      console.log('params', params['value']);
      this.productService.filter(this.value);
      console.log("Filtered", this.productService.itemsFiltered);
    });
  }

}
