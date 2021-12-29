//component decorator;
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//root component, index.html import <app-root></app-root>
  templateUrl: './app.component.html',//app html 
  styleUrls: ['./app.component.scss']//app scss file
})
export class AppComponent {
  title:string = 'this is first sentense in angular';//export variable
  //variable number is 0;
  count:number=0;
  ipt:string="";
  constructor(){}
  //click function
  handleClick(flag:boolean){
    if(flag){
      this.count++;
    }else{
      this.count--;
    }
  }
}
