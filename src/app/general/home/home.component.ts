// import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from 'src/app/services/sign.service';
import { Word } from 'src/app/models/word';
import { TextService } from 'src/app/services/text.service';
import { EventEmitter,Component, OnInit, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
// import {ErrorStateMatcher} from '@angular/material/core';
// import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
flag:boolean=false;
displayImage:boolean=true;
isHome!:boolean
fromHome:string=""
@Output()
onChangeTypeStudy:EventEmitter<string>=new EventEmitter<string>()
@Output()
onChangeTypePractice:EventEmitter<string>=new EventEmitter<string>()
  constructor(private route:ActivatedRoute,private _router:Router,private signService:SignService,private textService:TextService, private radio:MatRadioModule){}
  ngAfterViewInit ()
  {
     // this.isHome=true
 
  }
  ngOnInit(): void {

    this.fromHome = this.route.snapshot.params['type'];
    if((typeof this.fromHome=='undefined')||(this.fromHome=='home'))
    {
      this.isHome=true
    }
  }
  openDropDown()
  {
    if(this.flag)
    this.flag=false;
    else
    this.flag=true;
  }
  navigate(page:string)
  {
    this.isHome=false
    this._router.navigate([page,{type:'page'}])
  }
 
  getSign(name:string) 
  {
    this.isHome=false
    if(name=='Letters')
    {
      this._router.navigate(["displaySign",{type:'Letters'}])   
      this.onChangeTypeStudy.emit('Letters')
    }
    else
    {
      this._router.navigate(["displaySign",{type:'Numbers'}])
      this.onChangeTypeStudy.emit('Numbers')
    }

  }
  getText(name:string)
  {
    this.isHome=false
    if(name=='Letters')
    {
      this.onChangeTypePractice.emit("Letters")
      this._router.navigate(["practice",{type:'Letters'}])
    }
    else
    {
      this.onChangeTypePractice.emit("Numbers")
      this._router.navigate(["practice",{type:'Numbers'}])
    }
  }
  toHome()
  {
   this.isHome=true
   this._router.navigate(["home",{type:'home'}])
  }
  }
