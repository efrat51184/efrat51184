import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardData } from 'src/app/cardData';
import { Word } from 'src/app/models/word';
import { Text } from 'src/app/models/text';

import { DisplayDialogComponent } from '../display-dialog/display-dialog.component';
import { TextService } from 'src/app/services/text.service';
import { SignService } from 'src/app/services/sign.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  signLetters:Word[]=[]
  signNumbers:Word[]=[]
  size!:number
  type!:string  
  nextState!: 'default' | 'flipped' | 'matched';
  cardImagesLetters:[number,string][] = []
  cardImagesNumbers :[number,string][] = []
  cardImages :[number,string][] = []

cards: CardData[] = [];
flippedCards: CardData[] = [];
matchedCount:number=0
  constructor(private route:ActivatedRoute,private dialog: MatDialog,private signService:SignService) { }
    //בשביל הדוגמא
  w!:Word
w1!:Word
w2!:Word
w3!:Word
  ngOnInit(): void {
    //בשביל הדוגמא
    this.type = this.route.snapshot.params['type'];
    this.w=new Word(1,1,'a','/assets/picture signs/a.png')
    this.w1=new Word(1,1,'b','/assets/picture signs/b.png')
    this.signLetters.push(this.w)

    this.signLetters.push(this.w1)
    this.w2=new Word(1,1,'1','/assets/picture signs/1.png')
    this.w3=new Word(1,1,'2','/assets/picture signs/2.png')
    this.signNumbers.push(this.w2)

    this.signNumbers.push(this.w3)
//כשמורידים את הדוגמא להוציא את זה 
    // this.signService.getletterArray().subscribe(data =>{this.signLetters=data})
    //   this.signService.getnumberArray().subscribe(data =>{this.signNumbers=data})
      this.signLetters.forEach(element => {
        this.cardImagesLetters.push([1,element.nameWord]);
        this.cardImagesLetters.push([2,element.signWord]);

      });
      this.signNumbers.forEach(element => {
        this.cardImagesNumbers.push([1,element.nameWord]);
        this.cardImagesNumbers.push([2,element.signWord]);

      });
      if(this.type=='Letters')
       this.cardImages= this.cardImagesLetters
       else
      this.cardImages= this.cardImagesNumbers
      this.setupCards();
  }
  changeType(e:string)
  {
   this.type=e
   if(this.type=='Letters')
   this.cardImages= this.cardImagesLetters
   else
   this.cardImages= this.cardImagesNumbers
  }
setupCards(): void {
  this.cards = [];
  this.cardImages.forEach((image) => {
    const cardData: CardData = {
      imageId: image,
      state: 'default'
    };

    this.cards.push(cardData);
  });

  this.cards = this.shuffleArray(this.cards);
}
shuffleArray(anArray: any[]): any[] {
return anArray.map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);
}
cardClicked(index: number): void {
  const cardInfo = this.cards[index];

  if (cardInfo.state === 'default' && this.flippedCards.length < 2)      
  {
    cardInfo.state = 'flipped';
    this.flippedCards.push(cardInfo);

    if (this.flippedCards.length === 2) {
      this.checkForCardMatch();
   }

  } else if (cardInfo.state === 'flipped') {
    cardInfo.state = 'default';
    this.flippedCards.pop();

  }
}
checkForCardMatch(): void {
  setTimeout(() => {
    const cardOne = this.flippedCards[0];
    const cardTwo = this.flippedCards[1];
    
    if(cardOne.imageId[0]==2)
    {
       this.nextState = cardOne.imageId[1][22] === cardTwo.imageId[1] ? 'matched' : 'default';

    }
    else
    {
       this.nextState = cardTwo.imageId[1][22] === cardOne.imageId[1] ? 'matched' : 'default';

    }
    cardOne.state = cardTwo.state = this.nextState;

    this.flippedCards = [];

    if (this.nextState === 'matched') {
      this.matchedCount++;

      if (this.matchedCount === (this.cardImages.length/2)) {
        const dialogRef = this.dialog.open(DisplayDialogComponent, {
          disableClose: false
        });
        this.restart();
        dialogRef.afterClosed().subscribe(() => {
        });
      }
    }

  }, 1500);
}
restart(): void {
  this.matchedCount = 0;
  this.setupCards();
}
}
