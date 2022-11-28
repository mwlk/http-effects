import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [ListComponent, UserDetailComponent],
  imports: [CommonModule],
  exports: [ListComponent, UserDetailComponent],
})
export class UsersModule {}
