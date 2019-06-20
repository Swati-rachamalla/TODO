create database todo-database;

create table todo(
    todo_number int ,
    todo_name varchar(255),
    todo_desc varchar(255),
    primary key(todo_number)
);

create table users(
    user_id int ,
    first_name varchar(255),
    last_name varchar(255),
    email varchar(255),
    password varchar(255),
    created_date DATETIME,
    modified_date DATETIME,
    primary key(user_id)
)

