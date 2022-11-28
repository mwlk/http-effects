import { loadUsers } from './../../store/actions/users.actions';
import { AppState } from './../../store/app.reducers';
import { IUser } from './../../models/user';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  userSub$!: Subscription;
  loading: boolean = false;
  error: any;

  constructor(private _store: Store<AppState>) {}
  ngOnDestroy(): void {
    this.userSub$.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub$ = this._store
      .select('users')
      .subscribe(({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      });

    this._store.dispatch(loadUsers());
  }
}
