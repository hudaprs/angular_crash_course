import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string = '';
  @Output() createTodo: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addTodo() {
    const newTodo = {
      title: this.title,
      completed: false,
    };

    this.createTodo.emit(newTodo);
  }
}
