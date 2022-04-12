import { Component, OnInit, ChangeDetectorRef, AfterContentChecked, Output, EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word';
import { Text } from 'src/app/models/text';
import { SignService } from '../../services/sign.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TextService } from '../../services/text.service';
import { MenuItem } from "primeng/api";


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {

    constructor(private route:ActivatedRoute,private _router:Router,private _formBuilder: FormBuilder) {
      
     }
   ngOnInit(): void {
   this.type = this.route.snapshot.params['type'];
   }
   @Output()
   onChangeType:EventEmitter<string>=new EventEmitter<string>()
    //  geeks!: MenuItem[];
    //  index: number=0
     type!:string
    //  navigate() {
    //    if(this.index+1==2)
    //    {
    //      this.geeks.findIndex
    //      this.index =0
    //        this._router.navigate(['memoryGame',{type:this.type}])
   
    //    }
    //    else
    //    {
    //     this.index += 1
    //     if(this.index ==0)
    //      this._router.navigate(['memoryGame',{type:this.type}])
    //      else
    //      this._router.navigate(['completionGame',{type:this.type}])

    //    }
    //  }
    navigate(s:string)
     {
      if(s =='memory')
      this._router.navigate(['memoryGame',{type:this.type}])
      else
      this._router.navigate(['completionGame',{type:this.type}])
     }
     changeType(e:string)
     {
      this.type=e;
      this.onChangeType.emit(this.type)

     }
    };