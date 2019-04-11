import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../game';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;
  @Input() game: Game;
  @Input() isMainSection: boolean;
  constructor() { }
  getDiscount(game): number {
    return Math.floor((this.game.oldPrice - this.game.newPrice) * 100 / this.game.oldPrice);
  }

  ngOnInit() {
  }

}
