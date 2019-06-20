import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent } from './register/register.component';
import {CreateTodoComponent} from './todoOperation/create-todo/create-todo.component';
import { UpdateTodoComponent } from './todoOperation/update-todo/update-todo.component';

const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'todo', component: CreateTodoComponent},
  {path : 'edit/:id', component: UpdateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
