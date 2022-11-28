import { UserService } from 'src/app/services/usuario.service';
import * as actions from './../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, tap } from 'rxjs';
@Injectable()
export class UsersEffects {
  /**
   *
   */
  constructor(private actions$: Actions, private _userSvc: UserService) {}
  //   loadUsers$ = createEffect(
  //     () =>
  //     this.actions$.pipe(
  //       ofType(actions.loadUsers),
  //       tap(data => console.info(`effect tap`, data)),
  //       mergeMap(
  //         () => this._userSvc.getUsers()
  //         .pipe(
  //             tap(data => console.log(`get users` data))
  //         )
  //       )
  //     )
  //   );

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadUsers),
      mergeMap(() =>
        this._userSvc.getUsers().pipe(
          map((users) => actions.loadUsersSuccess({ users: users.data })),
          catchError((err) => of(actions.loadUsersError({ payload: err })))
        )
      )
    )
  );
}
