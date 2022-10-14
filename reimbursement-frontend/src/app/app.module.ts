import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReimbursementListComponent } from './components/reimbursement-list/reimbursement-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateReimbursementComponent } from './components/create-reimbursement/create-reimbursement.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './components/login-user/login-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ReimbursementListComponent,
    UserListComponent,
    CreateReimbursementComponent,
    CreateUserComponent,
    LoginUserComponent
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
