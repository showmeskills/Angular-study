import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  @Output() onShow:EventEmitter<any> = new EventEmitter()
  private title:string = 'Todo-list'
  public btnTitle:string = "add"
  public btnStyle:{} = {
    width:'80px',
    height:'70px',
    fontSize:'18px',
    backgroundColor:'#81c962',
    color:'white',
    border:'none',
  }
  public iptTodo:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  get getTitle(){
    return this.title;
  }
  set setTitle(title:string){
    this.title = title
  }
  handleClick(){
    this.onShow.emit()
  }
}
