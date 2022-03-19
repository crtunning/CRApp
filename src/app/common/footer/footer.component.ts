import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  annio: number = new Date().getFullYear();

  constructor(public infoService: InfoService) { }

  ngOnInit(): void {
  }

}
