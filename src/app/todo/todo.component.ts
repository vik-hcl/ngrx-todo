import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, startWith } from 'rxjs/operators';

import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  newTodo: string;
  allTodos: Todo[] = [];
  allTodos$: Observable<Todo[]> = this.store.select(state => state.todo);

  constructor(
    private store: Store<{ todo: Todo[] }>
  ) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Todo List] Retreive Todo' });
    this.allTodos$
    .pipe(
      filter(el => el && el.length > 0)
    )
    .subscribe(res => this.allTodos = res); 
    // this.allTodos$
    // .subscribe(res => console.log(res));
  }

  addTodo(todo) {
    this.store.dispatch({ type: '[Todo List] Add Todo', todo });
  }

  deleteTodo(todo) {
    this.store.dispatch({ type: '[Todo List] Remove Todo', todo });
  }

}
