import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {GameModalWindowComponent} from '../game-modal-window/game-modal-window.component';
import {Router, ActivatedRoute} from '@angular/router';
import {GameProviderService} from '../../services/game-provider.service';
import {Game} from '../../game';
import {Observable} from 'rxjs';

@Component({
  template: ''
})
export class ModalWindowEntryComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameProviderService
  ) {
    const game = this.getGame();
    this.openGameDialog(game);
  }

  ngOnInit() {
  }

  openGameDialog(g: Observable<Game>): void {
    g.subscribe(game => {
      if (game !== undefined) {
        const dialogRef = this.dialog.open(GameModalWindowComponent,
          {
            width: '1000px',
            data: {game}
          });
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['../../'], {relativeTo: this.route});
        });
      }
      }
    );
  }

  getGame(): Observable<Game> {
    const id = +this.route.snapshot.paramMap.get('id');
    return this.gameService.getGame(id);
  }
}
