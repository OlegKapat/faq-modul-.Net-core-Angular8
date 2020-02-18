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
      {path:'home',component:HomeComponent},
      {path:'create',component:CreateQuestionComponent},
      {path:'create/:id',component:CreateQuestionComponent},
      {path:'**',  component:HomeComponent},


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
