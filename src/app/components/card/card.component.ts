import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Game } from '../../game';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  orderedGames: Map<number, Game>;
  amount: number;
  constructor(private orderService: OrderService) {
    this.orderedGames = this.orderService.getOrderedGames();
    this.amount = this.orderService.priceCalculation();
  }

  ngOnInit() {
  }

  getDiscount(game: Game): number {
    return Math.floor((game.oldPrice - game.newPrice) * 100 / game.oldPrice);
  }
  deleteGameFromOrder(game: Game): void {
    this.orderedGames = this.orderService.deleteGameFromOrder(game.id);
    this.amount = this.orderService.currentAmount();
  }

}
