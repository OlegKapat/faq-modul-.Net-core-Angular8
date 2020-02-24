import { AuthInterceptorService } from './shared/interfaces/services/auth-interceptor.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { AnswerComponent } from './components/answer/answer.component';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { AnswerresolverService } from './shared/interfaces/services/answerresolver.service';
import { AuthguardService } from './shared/interfaces/services/authguard.service';
import { ModalDirective } from './shared/directives/modal.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal/modal.component';
import {AuthService} from './shared/interfaces/services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CreateQuestionComponent,
    QuestionListComponent,
    LoginComponent,
    RegistrationComponent,
    AnswerComponent,
    AnswerListComponent,
    ModalDirective,
    ModalComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:"login", pathMatch: 'full' },
      {path:'login',component:LoginComponent},
      {path:"registration",component:RegistrationComponent},
      {path:'home',component:HomeComponent,canActivate:[AuthguardService]},
      {path:'create',component:CreateQuestionComponent,canActivate:[AuthguardService]},
      {path:'create/:id',component:CreateQuestionComponent},
      {path:'answer-list/:id',component:AnswerListComponent,canActivate:[AuthguardService], resolve:{answer:AnswerresolverService}},
      {path:'**',  component:HomeComponent},


    ]),
    BrowserAnimationsModule
  ],
  providers: [AuthguardService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  entryComponents:[ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
