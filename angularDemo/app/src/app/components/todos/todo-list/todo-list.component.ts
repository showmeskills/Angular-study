import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from '../../../services/task.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() isShow:boolean=false;
  public tasks:Task[] =[];

  constructor(private taskService:TaskService) {}

  ngOnInit(): void {
    this.onGetTasks()
  }
  onGetTasks(){
    this.taskService.getTasks().subscribe(tasks=>{
      this.tasks = tasks;
    })
  }
  onDeleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>this.onGetTasks())
  }
  onToggleReminder(task:Task){
    task.reminder=!task.reminder
    this.taskService.updateTaskReminder(task).subscribe(()=>this.onGetTasks())
  }
  onAddTask(task?:Task){
   this.taskService.addTask(task!).subscribe(()=>this.onGetTasks());
  }
}
