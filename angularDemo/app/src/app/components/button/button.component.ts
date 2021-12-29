import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnTitle=""
  @Input('btnStyle') btnStyle={}
  @Output() handleClick = new EventEmitter<string>()
  constructor() { 
    
   }

  ngOnInit(): void {
  }
  handleAdd(){
    this.handleClick.emit()
  }
}
