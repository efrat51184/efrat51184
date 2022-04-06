import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LearningModule } from '../learning/learning.module';
import { DisplaySignComponent } from '../learning/display-sign/display-sign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { MatRadioGroup } from '@angular/material/radio';
import {MatRadioGroupHarness} from '@angular/material/radio/testing';
import { StepsModule } from "primeng/steps";
import { ToastModule } from "primeng/toast";
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations"
// import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [HomeComponent,AboutComponent],
  imports: [CommonModule, ReactiveFormsModule,FormsModule,BrowserModule,HttpClientModule,MatRadioModule
    // ,MatButtonToggleModule
    ,StepsModule,ToastModule,BrowserAnimationsModule
  ],
  exports:[HomeComponent,MatRadioGroup]
 
})
export class GeneralModule {

 }
