import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReimbursementListComponent } from './components/reimbursements/reimbursement-list/reimbursement-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { EmployeesListComponent } from './components/users/employees-list/employees-list.component';
import { AdminsListComponent } from './components/users/admins-list/admins-list.component';
import { FinanceManagerListComponent } from './components/users/finance-manager-list/finance-manager-list.component';
import { CreateReimbursementComponent } from './components/reimbursements/create-reimbursement/create-reimbursement.component';
import { PendingReimbursementsComponent } from './components/reimbursements/pending-reimbursements/pending-reimbursements.component';

@NgModule({
  declarations: [
    AppComponent,
    ReimbursementListComponent,
    UserListComponent,
    CreateReimbursementComponent,
    CreateUserComponent,
    LoginUserComponent,
    UpdateUserComponent,
    PendingReimbursementsComponent,
    EmployeesListComponent,
    AdminsListComponent,
    FinanceManagerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
