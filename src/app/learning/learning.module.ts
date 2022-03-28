import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplaySignComponent } from './display-sign/display-sign.component';
import { PracticeComponent } from './practice/practice.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../general/home/home.component';
import { GeneralModule } from '../general/general.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { TestComponent } from './test/test.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DisplaySignComponent, PracticeComponent, TestComponent],
  imports: [GeneralModule, CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatStepperModule, MatFormFieldModule],
  exports: [DisplaySignComponent]
})
export class LearningModule { }
