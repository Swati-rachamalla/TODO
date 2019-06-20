import {Component, OnInit, ViewChild} from '@angular/core';
import { Todo } from '../models/todo';
import { TodoOperationService } from '../services/todo-operation.service';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];
  dataSource = [];
  name: string;
  desc: string;
  displayedColumns: string[] = ['todo_number', 'todo_name', 'todo_desc', 'Edit', 'Delete'] ;
  todo: Todo;
  constructor(
    private todoService: TodoOperationService,
    private route: Router,
    private authService: AuthenticationService) {}

  ngOnInit() {
    this.loadAllTodos();
  }

  private loadAllTodos() {
    this.todoService.getTodos().pipe(first()).subscribe(todos => {
      this.todos = todos;
      this.dataSource = todos;
      console.log(this.todos);
    });
  }

  onRemove(id: number) {
    console.log(id);
    this.todoService.deleteTodo(id).pipe(first()).subscribe(res =>
      this.loadAllTodos());
    }
  // onEdit(id: any) {
  //   console.log(id);
  //   this.route.navigate(['/edit']);
  //   this.todoService.updateTodo(id).pipe(first()).subscribe( res => {
  //     console.log(res);
  //   });
  // }

    getTotalTodos() {
    return this.todos.length;
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['login']);
  }
}
