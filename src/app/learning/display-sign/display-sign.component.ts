// import { Component, Input, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word';

import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-display-sign',
  templateUrl: './display-sign.component.html',
  styleUrls: ['./display-sign.component.scss']
})
export class DisplaySignComponent implements OnInit {
  
  selectedSignArray!:Word[]
  NumbersSignArray!:Word[]
  LettersSignArray!:Word[]

 type!:string
  constructor(private route:ActivatedRoute,private signService:SignService ) { 
    this.route.params.subscribe(params => {
      this.type = params['signArray']; });
  
    // if(this.type=='Letters')
    // this.selectedSignArray=this.LettersSignArray
    // else
    // this.selectedSignArray=this.NumbersSignArray

  }
  changeArray(e:string)
  {
    if(e=='Letters')
    this.selectedSignArray=this.LettersSignArray
    else
    this.selectedSignArray=this.NumbersSignArray
  }
  ngOnInit(): void {
    this.signService.getletterArray().subscribe(data =>this.LettersSignArray=data)
    this.signService.getnumberArray().subscribe(data =>this.NumbersSignArray=data)
  } 
}
