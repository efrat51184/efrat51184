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
import { GameCardComponent } from './game-card/game-card.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { animate, state, style, transition, trigger } from '@angular/animations';


import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { StepsModule } from "primeng/steps";
import { ToastModule } from "primeng/toast";
import { CompletionGameComponent } from './completion-game/completion-game.component';
@NgModule({
  declarations: [DisplaySignComponent, PracticeComponent, TestComponent,MemoryGameComponent, GameCardComponent,CompletionGameComponent],
  imports: [GeneralModule, CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatStepperModule, MatFormFieldModule,MatToolbarModule,
  BrowserAnimationsModule,StepsModule,ToastModule],
  exports: [DisplaySignComponent,GameCardComponent,PracticeComponent]
})
export class LearningModule { }
