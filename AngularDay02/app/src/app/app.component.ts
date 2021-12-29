import { Component } from '@angular/core';

interface Obj{
  name:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public role:string = "";
  public name:string ="";
  public object:Obj = {
    name:""
  };
  public arr:any[]=[];
  public arrName:Array<string>=["terrance","terry"]
  public siteUrl:string = "";
  constructor(){
    this.role = "Terry";
    this.name="Terrance";
    this.object.name="Terrance";
    this.arr[0] = "te"
    this.siteUrl = window.location.href;
  }
  getName(){
    return "Peter";
  }
}
