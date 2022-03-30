import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardData } from 'src/app/cardData';
import { DisplayDialogComponent } from '../display-dialog/display-dialog.component';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];

cards: CardData[] = [];
flippedCards: CardData[] = [];
matchedCount:number=0
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.setupCards();

  }
setupCards(): void {
  this.cards = [];
  this.cardImages.forEach((image) => {
    const cardData: CardData = {
      imageId: image,
      state: 'default'
    };

    this.cards.push({ ...cardData });
    this.cards.push({ ...cardData });

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
    const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
    cardOne.state = cardTwo.state = nextState;

    this.flippedCards = [];

    if (nextState === 'matched') {
      this.matchedCount++;

      if (this.matchedCount === this.cardImages.length) {
        const dialogRef = this.dialog.open(DisplayDialogComponent, {
          disableClose: false
        });

        dialogRef.afterClosed().subscribe(() => {
          this.restart();
        });
      }
    }

  }, 1000);
}
restart(): void {
  this.matchedCount = 0;
  this.setupCards();
}
}
