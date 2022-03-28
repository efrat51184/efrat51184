import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Word } from 'src/app/models/word';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  NumbersSignArray!:Word[]
  LettersSignArray!:Word[]
  randNum!:number
  type:string=""
  testForm!:FormGroup;
  isGood:boolean=false;
  constructor(private route:ActivatedRoute,private signService:SignService) { }

  ngOnInit(): void {
    this.signService.getletterArray().subscribe(data =>{this.LettersSignArray=data})
    this.signService.getnumberArray().subscribe(data =>{this.NumbersSignArray=data})
  this.type = this.route.snapshot.params['type'];
  this.testForm=new FormGroup({
    answer:new FormControl()
  })
  this.beginRandNumber()
  }
  beginRandNumber(){
    if(this.type=='Letters')
      {
        this.randNum=Math.round((Math.random()*26));
        while(this.randNum==0){
        this.randNum=Math.round((Math.random()*26));
      }
    }
    else{
      this.randNum=Math.round((Math.random()*10));
        while(this.randNum==0){
        this.randNum=Math.round((Math.random()*10));
    }
  }
}
// ngAfterViewInit
finish(){
 if(Number(this.testForm.value.answer)==this.randNum)
    this.isGood=true;
  else
  alert("that's worng! please try again.")
}
}
