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
  genre = Genre;
  games: Game[];
  filteredGames: Game[];
  constructor(private gameService: GameProviderService) { }
  getGames(): void {
    this.games = this.gameService.getGames();
    this.filteredGames = this.games;
  }
  renderGamesByGenre(genre: Genre): void {
    if (genre) {
      this.filteredGames = this.games.filter(
        game => game.genre.filter( g => g === genre).length > 0);
    } else {
      this.filteredGames = this.games;
    }
  }

  ngOnInit() {
    this.getGames();
  }

}
