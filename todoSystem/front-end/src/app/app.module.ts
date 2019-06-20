import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateTodoComponent } from './todoOperation/create-todo/create-todo.component';
import { ReceiveTodoComponent } from './todoOperation/receive-todo/receive-todo.component';
import { UpdateTodoComponent } from './todoOperation/update-todo/update-todo.component';
import { DeleteTodoComponent } from './todoOperation/delete-todo/delete-todo.component';
import { CustomMaterialModule } from './core/material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateTodoComponent,
    ReceiveTodoComponent,
    UpdateTodoComponent,
    DeleteTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
