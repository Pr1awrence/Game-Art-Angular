import {Component, OnInit} from '@angular/core';
import {Game} from '../../game';
import {GameProviderService} from '../../services/game-provider.service';

@Component({
  selector: 'app-best-games',
  templateUrl: './best-games.component.html',
  styleUrls: ['./best-games.component.scss']
})
export class BestGamesComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameProviderService) {
  }

  getGames(): void {
    this.gameService.getGames().subscribe(games => {
        this.games = games.filter(game => game.bestGame);
      }
    );
  }

  ngOnInit() {
    this.getGames();
  }

}
