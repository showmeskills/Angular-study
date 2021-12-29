import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isShow:boolean=true;
  constructor() {
    
  }
  onShow(){
    this.isShow = !this.isShow
  }
}
