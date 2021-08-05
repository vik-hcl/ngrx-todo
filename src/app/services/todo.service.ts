import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Todo } from '../model/todo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<any> {
    return this.http.get<Todo[]>(`https://jsonplaceholder.typicode.com/posts`)
      // .pipe(
      //   map((res: any) => JSON.stringify(res))
      // )
  }

  postTodo(todo: Todo): Observable<any> {
    return this.http.post<Todo>(`https://jsonplaceholder.typicode.com/posts`, todo);
  }

  deleteTodo(userId: number): Observable<any> {
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/posts/${userId}`);
  }


}
