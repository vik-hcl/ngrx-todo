import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';

@Injectable()
export class TodoEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Todo List] Retreive Todo'),
    mergeMap(() => this.todoService.getTodos()
      .pipe(
        map(todo => ({ type: '[Todo List] Load Success', todo })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}