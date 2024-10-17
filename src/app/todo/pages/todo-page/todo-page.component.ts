import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent implements OnInit {

@ViewChild('taskInput')
public taskInput!: any;

public taskDesc: string = '';

public todoList: Task[] = [];

constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.getTasks();
  }

getTasks():void{
  this.todoService.getTasks().subscribe(
    tasks => {this.todoList = tasks;}
  )
}

addTask():void {
  const task:Task = {
    description: this.taskDesc, completed: false
  }
  this.todoService.addTask(task).subscribe(resp =>{
    this.taskInput.reset();
    this.getTasks();
  })

}

updateTaskStatus(e:any, task:Task):void {
 this.todoService.updateTask(task).subscribe(resp => {
  this.getTasks()
 })
}

deleteTask(id: Task["id"]) {
  this.todoService.deleteTask(id).subscribe(resp =>{
    this.getTasks()
  })
}

}
