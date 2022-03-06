// import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from 'src/app/services/sign.service';
import { Word } from 'src/app/models/word';
import { TextService } from 'src/app/services/text.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
b:boolean=false;
ass:boolean=true;
a:number[]=[1,2,3,4]

NumWord!:boolean;
@Output()
selectedSignArray!:Word[]
selectedTextArray!:Text[]
  constructor(private _router:Router,private signService:SignService,private textService:TextService) { }
  ngOnInit(): void {
    
  }
  openDropDown()
  {
    if(this.b)
    this.b=false;
    else
    this.b=true;
  }
  navigate(page:string)
  {
    this._router.navigate([page])
  }
 
  getSign(name:string)
  {
    if(name=='Letters')
    this._router.navigate(["displaySign",{signArray:"Letters"}])
    else
    
    this._router.navigate(["displaySign",{signArray:"Numbers"}])
  }
  getText(name:string)
  {
    if(name=='Letters')
    this._router.navigate(["practice",{type:"Letters"}]);
    else
    {
    this._router.navigate(["practice",{type:"Numbers"}]);
  }
  

  }
  
  }
