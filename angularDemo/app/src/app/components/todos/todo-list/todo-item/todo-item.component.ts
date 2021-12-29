import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {Task} from "../../../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() task:Task={} as Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    this.onToggleReminder.emit(task)
  }
}
