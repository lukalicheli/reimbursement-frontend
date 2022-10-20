import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReimbursementListComponent } from './components/reimbursement-list/reimbursement-list/reimbursement-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { CreateUserComponent } from './components/users/create-user/create-user.component';
import { CreateReimbursementComponent } from './components/reimbursements/create-reimbursement/create-reimbursement.component';
import { EmployeeReimbursementListComponent } from './components/employee-reimbursement-list/employee-reimbursement-list.component';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReimbursementListComponent,
    UserListComponent,
    CreateReimbursementComponent,
    CreateUserComponent,
    LoginUserComponent,
    EmployeeReimbursementListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe,LoginUserComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
