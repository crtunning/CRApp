import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoInterface } from '../Interface/info-interface';
import { MemberInterface } from '../Interface/member-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  info: InfoInterface= {};
  members : MemberInterface[] = [];
  private isLoad: boolean= false;

  constructor(private http: HttpClient) {
    this.load();
    this.loadTeam(); 
  }

  private load() {
    this.http.get('assets/data/data-page.json').subscribe((result: InfoInterface) => {
      this.info = result;
      this.isLoad=true;
    });
  }

  private loadTeam() {
    this.http.get('https://crapp-18-default-rtdb.firebaseio.com/team.json').subscribe((result: any) => {
      this.members = result;
      this.isLoad=true;
    });
  }
}
