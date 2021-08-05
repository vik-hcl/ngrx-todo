import { createReducer, on, Action } from '@ngrx/store';

import { retreiveTodo, todoLoadSuccess } from './todo.action';

export const initialState: ReadonlyArray<any[]> = [];

export const todoReducer = createReducer(
  initialState,
  on(todoLoadSuccess, (state, {todo}) => [...state, ...todo])
);
