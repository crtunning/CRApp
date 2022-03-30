import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public id: String= "";
  
  constructor(private route: ActivatedRoute, public productService: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id= params["id"];
      this.productService.getDetail(this.id);
    });
  }

}
