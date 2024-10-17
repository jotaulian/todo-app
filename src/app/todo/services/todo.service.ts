import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoService {
  private baseUrl:string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
  }

  addTask(postData: Task){
    return this.http.post(`${this.baseUrl}/tasks`, postData)
  }

  updateTask(postData: Task){
    return this.http.patch(`${this.baseUrl}/tasks/${postData.id}`, postData)
  }

  deleteTask(id: Task["id"]){
    return this.http.delete(`${this.baseUrl}/tasks/${id}`)
  }
}
