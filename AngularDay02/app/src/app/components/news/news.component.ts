import { Component, OnInit, } from '@angular/core';

interface UserInfo{
  id:number;
  name:string;
  age:number;
}



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {
  public title:string = "this is new component";// current instance, outside instance and sub-instance can be assessed;
  protected arrit:string = "there is nothing";// current instance and sub-instance can be accessed
  private msg:string = "this is msg";// current instance can be accessed; it have to use get and set functions
  public userInfo:UserInfo[] = [
    {
      id:0,
      name:"Terrance",
      age:20,
    },
    {
      id:1,
      name:"Terry",
      age:22,
    },
    {
      id:2,
      name:"Erick",
      age:20,
    }
  ]
  public initialTile:string = "";
  public student:string ="I am a student";
  public content = "<h2>I am html tag</h2>"
  constructor() {
    this.initialTile = "this is new things";
   }

  ngOnInit(): void {
    console.log("this ng OnInit")
  }
  getMsg():string{
    return this.msg;
  }
  setMsg(msg:string):void{
    this.msg = msg;
  }
}
