import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './logon/login/login.component';
import { LogonModule } from './logon/logon.module';
import { RegisterComponent } from './logon/register/register.component';
import { DisplaySignComponent } from './learning/display-sign/display-sign.component';
import { PracticeComponent } from './learning/practice/practice.component';
import { AboutComponent } from './general/about/about.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './general/home/home.component';
import { GeneralModule } from './general/general.module';
import { LoginService } from './services/login.service';
import { SignService } from './services/sign.service';
import { TextService } from './services/text.service';
// import { MatSliderModule } from '@angular/material/slider';

// import {MatRadioModule} from '@angular/material/radio';



const APP_ROOT:Route[]=[
  {path:"",pathMatch:"full", redirectTo:"home"},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"displaySign", component:DisplaySignComponent},
  {path:"about", component:AboutComponent},
  {path:"home", component:HomeComponent},
  {path:"practice", component:PracticeComponent},
  
  ]

@NgModule({
  imports: [
    RouterModule.forRoot( APP_ROOT),
    BrowserModule,
    AppRoutingModule,
    LogonModule,
    FormsModule,
    CommonModule,ReactiveFormsModule
    // ,MatRadioModule,MatSliderModule
  ],
  declarations: [
    AppComponent
  ],
  
  providers: [LoginService,SignService,TextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
