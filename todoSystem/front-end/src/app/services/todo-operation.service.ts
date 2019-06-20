import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TodoOperationService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return  this.http.get<Todo[]>('http://localhost:3000/todo');
  }

  getTodoById(id: number) {
    return  this.http.get<Todo[]>('http://localhost:3000/todo/' + id);
  }

  insertTodo(todo: Todo) {
    console.log(`service ${todo.todo_number}`);
    return  this.http.post<Todo[]>('http://localhost:3000/todo', todo);
  }

  deleteTodo(id: number) {
    console.log(`service ${id}`);
    return  this.http.delete<Todo[]>('http://localhost:3000/todo/' + id);
  }

  updateTodo(id: number, todo: Todo) {
    console.log(`service update ${todo}`);
    console.log(`service update ${id}`);
    return  this.http.put('http://localhost:3000/todo/' + id , todo);
  }
}
