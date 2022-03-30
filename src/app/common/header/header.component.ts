import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoService:InfoService, private router: Router) { }

  ngOnInit(): void {
  }

  public searchProduct(value: String) {
    if (value.length < 1)
      return;

    this.router.navigate(["search", value]);
  }

}
