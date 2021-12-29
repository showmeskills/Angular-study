import { NgModule } from '@angular/core';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import {ButtonComponent} from "../button/button.component";
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './todo-list/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations:[
        TodoHeaderComponent,
        TodoListComponent,
        TodoFooterComponent,
        ButtonComponent,
        TodoItemComponent,
        AddTaskComponent
    ],
    imports:[
        CommonModule,
        FontAwesomeModule,
        FormsModule
    ],
    exports:[
        TodoHeaderComponent,
        TodoListComponent,
        TodoFooterComponent,
    ]
})
export class TodoModule{}

