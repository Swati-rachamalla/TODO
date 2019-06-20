import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Todo } from '../../models/todo';
import { TodoOperationService } from '../../services/todo-operation.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  todo: Todo;
  public id: number;
  newItemForm: FormGroup;

  constructor(
    private service: TodoOperationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(parameterMap => {
        const id = +parameterMap.get('id');
        this.getEmployee(id);
      });
    }

  ngOnInit() {
    console.log('laskdjflkjdfl');
    this.newItemForm = this.formBuilder.group(
      { name: ['', Validators.required],
        desc: ['', Validators.required]
      });
    }


  onSubmit(): void {
    this.updateItem(this.newItemForm.value);
}

  updateItem(todo: Todo) {
    this.service.updateTodo(this.id, todo).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  getEmployee(id) {
    this.id = id;
    this.service.getTodoById(id).subscribe(res => {
    console.log(res[0].todo_name);
    console.log(res[0].todo_desc);
    this.newItemForm.setValue({name: res[0].todo_name, desc: res[0].todo_desc});
    });
  }
}
