import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';
import { GameProviderService } from '../../services/game-provider.service';
import {Genre} from '../../genre';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games: Game[];
  filteredGames: Game[];
  constructor(private gameService: GameProviderService) { }
  getGames(): void {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
  }
  renderGamesByGenre(genre: string): void {
    this.filteredGames = this.games;
    //Trouble with enum
    //this.filteredGames = this.games.filter(game => game.genre.filter(g => g.toString() === genre));
  }

  ngOnInit() {
    this.getGames();
  }

}
