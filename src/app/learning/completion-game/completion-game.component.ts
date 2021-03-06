import { ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Word } from 'src/app/models/word';
import { Text } from 'src/app/models/text';
import { SignService } from 'src/app/services/sign.service';
import { TextService } from 'src/app/services/text.service';

@Component({
  selector: 'app-completion-game',
  templateUrl: './completion-game.component.html',
  styleUrls: ['./completion-game.component.scss']
})
export class CompletionGameComponent implements OnInit {
  numberArray:Text[]=[]
  letterArray:Text[]=[]
  selectedArray:Text[]=[]
  selectedSign:Word[]=[]
  signLetters:Word[]=[]
  signNumbers:Word[]=[]
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
    {
  this.selectedArray=this.letterArray
  this.selectedSign=this.signLetters
    }
    else{
      this.selectedArray=this.numberArray
  this.selectedSign=this.signNumbers
   }
  }
beginRandNumber(){
  this.nOne=Math.round((Math.random()*3));
  while(this.nOne==0){
    this.nOne=Math.round((Math.random()*3));
}
}
beginsRandAnswer():void{
  this.randAnswer=Math.round((Math.random()*this.size));
}
changeFlag():void{
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
    this.vx=true;

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
t:Text=new Text()
w2!:Word
w3!:Word
ngOnInit(): void {
  this.type = this.route.snapshot.params['type'];
  // this.textService.getLettersText().subscribe(data =>this.letterArray=data)
  // this.textService.getNumbersText().subscribe(data =>this.numberArray=data)
  // this.signService.getletterArray().subscribe(data =>{this.signLetters=data})
  // this.signService.getnumberArray().subscribe(data =>{this.signNumbers=data})
  //for example
  this.t.categoryId=1;
  this.t.textId=1;
  this.t.textAnswer=[1,2]
  this.t.textValue='1'
  this.w2=new Word(1,1,'1','/assets/picture signs/1.png')
  this.w3=new Word(1,1,'2','/assets/picture signs/2.png')
  this.signNumbers.push(this.w2)
  this.signNumbers.push(this.w3)
  this.numberArray.push(this.t)

  //end example
  if(this.type=='Letters')
  {
this.selectedArray=this.letterArray
this.selectedSign=this.signLetters
  }
  else{
    this.selectedArray=this.numberArray
this.selectedSign=this.signNumbers
  }
  

}

}
