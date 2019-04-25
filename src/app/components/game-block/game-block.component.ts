import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../game';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-game',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent implements OnInit {
  @Input() game: Game;
  @Input() isMainSection: boolean;

  constructor(private orderService: OrderService) { }

  getDiscount(game): number {
    return Math.floor((this.game.oldPrice - this.game.newPrice) * 100 / this.game.oldPrice);
  }

  addToOrder(game): void {
    this.orderService.addToCard(this.game);
  }
  ngOnInit() {
  }
}
