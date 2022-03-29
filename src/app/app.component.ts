import { Component } from '@angular/core';
import { InfoService } from './services/info.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoService: InfoService, public productService: ProductService) {
    
  }
}
