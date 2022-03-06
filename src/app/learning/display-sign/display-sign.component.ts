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
 type!:string
  constructor(private route:ActivatedRoute,private signService:SignService ) { 
    this.route.params.subscribe(params => {
      this.type = params['signArray']; });
    if(this.type=='Letters')
    this.signService.getletterArray().subscribe(data =>this.selectedSignArray=data)
    else
    this.signService.getnumberArray().subscribe(data =>this.selectedSignArray=data)
  }

  ngOnInit(): void {
    
  } 
}
