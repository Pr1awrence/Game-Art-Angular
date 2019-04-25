import {Component, Inject, Input, OnInit} from '@angular/core';
import { Game } from '../../game';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderService } from '../../services/order.service';

export interface DialogData {
  game: Game;
}

@Component({
  selector: 'app-modal-window',
  templateUrl: './game-modal-window.component.html',
  styleUrls: ['./game-modal-window.component.scss']
})
export class GameModalWindowComponent implements OnInit {
  game: Game;
constructor( public dialogRef: MatDialogRef<GameModalWindowComponent>,
             @Inject(MAT_DIALOG_DATA) public data: DialogData,
             private orderService: OrderService) { }
  ngOnInit() {
    this.game = this.data.game;
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  getDiscount(game): number {
    return Math.floor((this.game.oldPrice - this.game.newPrice) * 100 / this.game.oldPrice);
  }

  addToOrder(game): void {
    this.orderService.addToCard(this.game);
    this.closeModal();
  }
}
