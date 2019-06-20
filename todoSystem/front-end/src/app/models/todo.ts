export class Todo {
    todo_number : number;
    todo_name : string;
    todo_desc : string;

    constructor(name: string, desc: string, id?: number) {
        this.todo_number = id;
        this.todo_name = name;
        this.todo_desc = desc;
    }
}
