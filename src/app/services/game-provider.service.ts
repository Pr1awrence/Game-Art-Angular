import { Injectable } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameProviderService {
  getGames(): Game[] {
    return GAMES;
  }
  constructor() { }
}
