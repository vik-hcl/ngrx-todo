import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo List] Add Todo',
  props<{ todo }>()
);

export const removeTodo = createAction(
  '[Todo List] Remove Todo',
  props<{ todo }>()
);

export const retreiveTodo = createAction(
  '[Todo List] Retreive Todo'
);

export const todoLoadSuccess = createAction(
  '[Todo List] Load Success',
  props<{ todo }>()
);
