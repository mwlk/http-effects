import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { ListComponent } from './users/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: ListComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
