import { IUser } from './../../models/user';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions';

export interface UsersState {
  users: IUser[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  error: null,
  loaded: false,
  loading: false,
};

const _usersReducer = createReducer(
  usersInitialState,
  on(actions.loadUsers, (state) => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(actions.loadUsersError, (state, { payload }) => ({
    ...state,
    loaded: false,
    loading: false,
    error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
    },
  }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
