import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application-json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoURI: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  // Get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoURI}?_limit=5`);
  }

  // Update todo status
  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(`${this.todoURI}/${todo.id}`, todo, httpOptions);
  }

  // Delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.todoURI}/${todo.id}`, httpOptions);
  }

  // Create todo
  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoURI, todo, httpOptions);
  }
}
