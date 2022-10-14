import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReimbursementListComponent } from './components/reimbursement-list/reimbursement-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
{path: 'users', component: UserListComponent},
{path: 'reimbursement', component: ReimbursementListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
