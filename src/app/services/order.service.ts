import { Injectable } from '@angular/core';
import {Game} from '../game';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public counter: number = 0;
  constructor() {}

  private orderedGames = new Map<number, Game>();
  public orderPrice: number = 0;

  addToCard(game: Game): void {
    this.orderedGames.set(game.id, game);
    this.counter = this.orderedGames.size;
    this.priceCalculation();
  }
  deleteGameFromOrder(key: number): Map<number, Game> {
    this.orderedGames.delete(key);
    this.counter = this.orderedGames.size;
    this.priceCalculation();
    return this.orderedGames;
  }
  getOrderedGames(): Map<number, Game> {
    return this.orderedGames;
  }
  priceCalculation(): number {
    this.orderPrice = 0;
    for (game of this.orderedGames.values()) {
      this.orderPrice += game.newPrice;
    }
    return Math.ceil(this.orderPrice * 100) / 100;
  }
  currentAmount(): number {
    return Math.ceil(this.orderPrice * 100) / 100;
  }
}
