import { Injectable } from '@angular/core';
import {Game} from '../game';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public counter: number = 0;
  constructor() {}

  private orderedGames = new Set<Game>();
  public orderPrice: number = 0;

  addToCard(game: Game): void {
    this.orderedGames.add(game);
    this.counter = this.orderedGames.size;
    this.priceCalculation();
  }
  deleteGameFromOrder(game: Game): Set<Game> {
    this.orderedGames.delete(game);
    this.counter = this.orderedGames.size;
    this.priceCalculation();
    return this.orderedGames;
  }
  getOrderedGames(): Set<Game> {
    return this.orderedGames;
  }
  priceCalculation(): number {
    this.orderPrice = 0;
    this.orderedGames.forEach(game => this.orderPrice += game.newPrice);
    return Math.ceil(this.orderPrice * 100) / 100;
  }
  currentAmount(): number {
    return Math.ceil(this.orderPrice * 100) / 100;
  }
}
