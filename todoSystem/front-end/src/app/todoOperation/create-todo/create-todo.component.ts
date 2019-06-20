import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Todo } from '../../models/todo';
import { TodoOperationService } from '../../services/todo-operation.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo;
  newItemForm: FormGroup;
  constructor(
    private service: TodoOperationService,
    private router: Router,
    private builder: FormBuilder) {}

  ngOnInit() {
    this.newItemForm = this.builder.group(
  { name: ['', Validators.required],
    desc: ['', Validators.required]
  });
  }
  onSubmit(): void {
      this.addItem(this.newItemForm.value);
}

  addItem(todo: Todo) {
this.service.insertTodo(todo)
.subscribe(() => { this.router.navigate(['/home']); } );
}


}
