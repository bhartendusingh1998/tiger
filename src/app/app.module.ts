import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/component/header/header.component';
import { FooterComponent } from './modules/component/footer/footer.component';
import { LoginComponent } from './modules/pre-login-module/login/login.component';
import { RegistrationComponent } from './modules/pre-login-module/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { UserComponent } from './modules/post-login-module/user/user.component';
import { CreateUserComponent } from './modules/post-login-module/create-user/create-user.component';
import { UserDetailsComponent } from './modules/post-login-module/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    CreateUserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
