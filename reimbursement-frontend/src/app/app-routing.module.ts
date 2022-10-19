import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateReimbursementComponent } from './components/reimbursements/create-reimbursement/create-reimbursement.component';
import { PendingReimbursementsComponent } from './components/reimbursements/pending-reimbursements/pending-reimbursements.component';
import { ReimbursementListComponent } from './components/reimbursements/reimbursement-list/reimbursement-list.component';
import { ActiveListComponent } from './components/users/active-list/active-list.component';
import { AdminsListComponent } from './components/users/admins-list/admins-list.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { EmployeesListComponent } from './components/users/employees-list/employees-list.component';
import { FinanceManagerListComponent } from './components/users/finance-manager-list/finance-manager-list.component';
import { InActiveListComponent } from './components/users/in-active-list/in-active-list.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/admins-list', component: AdminsListComponent },
  { path: 'users/employees-list', component: EmployeesListComponent },
  { path: 'users/finance-manager-list', component: FinanceManagerListComponent }, 
  { path: 'users/active-list', component: ActiveListComponent },
  { path: 'users/inActive-list', component: InActiveListComponent },
  { path: 'users/create-user', component: CreateUserComponent },
  { path: 'reimbursement', component: ReimbursementListComponent },
  { path: 'reimbursement/allPending', component: PendingReimbursementsComponent },
  { path: 'reimbursement/create-reimbursement', component: CreateReimbursementComponent },
  { path: 'users/update-user/:{username}Activation', component: UpdateUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
