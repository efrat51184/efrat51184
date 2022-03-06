import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
    textArray!:Text[]
    size!:number
    type!:string
    displayCompletionGame:boolean=false; 

    constructor(private route:ActivatedRoute,private _router:Router,private textService:TextService) {
      this.route.params.subscribe(params => {
        this.type = params['type']; });
      if(this.type=='Letters')
      { 
        this.textService.getLettersText().subscribe(data =>this.textArray=data)
         this.size=26;
      }
      else
      {
      this.textService.getNumbersText().subscribe(data =>this.textArray=data)
      this.size=10;
      }
     }
  changeFlag():void{
    if(this.displayCompletionGame==false)
      this.displayCompletionGame=true
    else
      this.displayCompletionGame=false
  }
  navigat(page:string)
  {
    this._router.navigate([page]);
  }
  ngOnInit(): void {
  }

}                  
