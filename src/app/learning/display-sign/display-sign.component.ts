// import { Component, Input, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/learning/dialog/dialog.component';
import { Word } from 'src/app/models/word';
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-display-sign',
  templateUrl: './display-sign.component.html',
  styleUrls: ['./display-sign.component.scss']
})
export class DisplaySignComponent implements OnInit {
  NumbersSignArray!:Word[]
  LettersSignArray!:Word[]
 type:string=""
  constructor(private route:ActivatedRoute,private signService:SignService,public dialog: MatDialog ) {  
   

}
  changeArray(e:string)
  {
    this.type =e;
  }
  ngOnInit(): void {
    this.signService.getletterArray().subscribe(data =>{this.LettersSignArray=data})
      this.signService.getnumberArray().subscribe(data =>{this.NumbersSignArray=data})
    this.type = this.route.snapshot.params['type'];
    
  } 
  openDialog()
  {
    this.dialog.open(DialogComponent);
  }
}
