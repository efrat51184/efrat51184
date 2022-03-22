import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word';
import { Text } from 'src/app/models/text';
import { SignService } from '../../services/sign.service';

import { TextService } from '../../services/text.service';



@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit, AfterContentChecked {
    numberArray!:Text[]
    letterArray!:Text[]
    signLetters!:Word[]
    signNumbers!:Word[]
    ind:number=-1
    size!:number
    type!:string
    nOne!:number
    randAnswer!:number
    vx:boolean=false
    goodAns:number=0
    displayCompletionGame:boolean=false; 
    f:boolean=false;
 
   
    constructor(private route:ActivatedRoute,private _router:Router,private textService:TextService,private signService:SignService, private changeDetector: ChangeDetectorRef) {
      
     }
     changeType(e:string)
     {
      this.type=e
      if(this.type=='Letters')
            this.size=26;
        else
          this.size=10;

      // if(e=='Letters')
      // { 
      //   this.textArray=this.letterArray
      //    this.size=26;
      // }
      // else
      // {
      //   this.textArray=this.numberArray
      //    this.size=10;
      // }
     }
 
  beginRandNumber(){
    this.nOne=Math.round((Math.random()*3));
    while(this.nOne==0){
      this.nOne=Math.round((Math.random()*3));
  }
}
  beginRandAnswer():void{
    this.randAnswer=Math.round((Math.random()*this.size));
}
changeFlag():void{
  // this.beginRandAnswer();
  if(this.displayCompletionGame==false)
    this.displayCompletionGame=true
  else
    this.displayCompletionGame=false

    this.beginRandNumber();
}
  navigate(page:string)
  {
    this._router.navigate([page]);
  }
  finish(i:number){
    this.ind=i;
    // if(this.vx)
    //   this.vx=false;
    // else
      this.vx=true;
    // alert("you did" +" "+ this.goodAns +" "+ "good answers!!")

  }
  selected(n:number){
    if(this.nOne==n)
    {
      this.goodAns+=1;
      this.f=true;
    }
    else{
      this.f=false;
    }
    
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.textService.getLettersText().subscribe(data =>{this.letterArray=data})
    this.textService.getNumbersText().subscribe(data =>this.numberArray=data)
    this.signService.getletterArray().subscribe(data =>{this.signLetters=data})
      this.signService.getnumberArray().subscribe(data =>{this.signNumbers=data})
    if(this.type=='Letters')
    this.size=25;
else
  this.size=9;
// if(this.type=='Letters')
// {
//   this.textService.getLettersText().subscribe(data =>{this.letterArray=data;this.textArray=data})
//   this.textService.getNumbersText().subscribe(data =>this.numberArray=data)
//   alert(this.letterArray[0])
// }
//  else
//  { 
//   this.textService.getNumbersText().subscribe(data =>{this.numberArray=data;this.textArray=data})
//   this.textService.getLettersText().subscribe(data=>this.letterArray=data)
//   alert(this.textArray[0])
// }
  }

}                  
