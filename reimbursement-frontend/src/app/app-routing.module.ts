import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateReimbursementComponent } from './components/reimbursements/create-reimbursement/create-reimbursement.component';
import { ReimbursementListComponent } from './components/reimbursement-list/reimbursement-list/reimbursement-list.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { EmployeeReimbursementListComponent } from './components/employee-reimbursement-list/employee-reimbursement-list.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/create-user', component: CreateUserComponent },
  { path: 'reimbursement', component: ReimbursementListComponent },
  { path: 'reimbursement/employee', component: EmployeeReimbursementListComponent},
  { path: 'reimbursement/create-reimbursement', component: CreateReimbursementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
