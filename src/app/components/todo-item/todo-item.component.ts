import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      completed: this.todo.completed,
    };

    return classes;
  }

  updateStatus(todo: Todo) {
    todo.completed = !todo.completed;

    return this.todoService
      .updateTodo(todo)
      .subscribe((todo) => console.log(todo));
  }

  removeTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
