import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LearningModule } from '../learning/learning.module';
import { DisplaySignComponent } from '../learning/display-sign/display-sign.component';
@NgModule({
  declarations: [HomeComponent,AboutComponent],
  imports: [CommonModule],
  exports:[HomeComponent]
 
})
export class GeneralModule {

 }
