import { IUser } from './../../models/user';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Success Loaded',
  props<{ users: IUser[] }>()
);

export const loadUsersError = createAction(
  '[Users] Users Error in Load',
  props<{ payload: any }>()
);
