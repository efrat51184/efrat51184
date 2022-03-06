import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaySignComponent } from './display-sign/display-sign.component';
import { PracticeComponent } from './practice/practice.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../general/home/home.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  declarations: [DisplaySignComponent,PracticeComponent],
  imports: [GeneralModule,CommonModule],
  exports:[DisplaySignComponent]
})
export class LearningModule { }
