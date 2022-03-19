import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoInterface } from '../Interface/info-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  info: InfoInterface= {};
  private isLoad: boolean= false;

  constructor(private http: HttpClient) { 
    this.http.get('assets/data/data-page.json').subscribe((result: InfoInterface) => {
      this.info = result;
      this.isLoad=true;
      console.log('Info', this.info);
    });
  }
}
