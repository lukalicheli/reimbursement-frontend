import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReimbursementComponent } from './components/create-reimbursement/create-reimbursement.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ReimbursementListComponent } from './components/reimbursement-list/reimbursement-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/create-user', component: CreateUserComponent },
  { path: 'reimbursement', component: ReimbursementListComponent },
  { path: 'reimbursement/create-reimbursement', component: CreateReimbursementComponent },
  { path: 'users/update-user/:{username}Activation', component: UpdateUserComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
