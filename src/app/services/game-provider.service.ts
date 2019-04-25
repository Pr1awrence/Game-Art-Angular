import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Game} from '../game';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GameProviderService {
  gamesUrl = '../../assets/database/games.json';
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
      .pipe(
        catchError(this.handleError<Game[]>('getGames', []))
      );
  }

  getGame(id: number): Observable<Game> {
    return this.http.get<Game[]>(this.gamesUrl)
      .pipe(
        map(games => games.find(game => game.id === id)),
        catchError(this.handleError<Game>('getGameById', null))
      );
  }

  constructor(
    private http: HttpClient) {
  }

  //Handle Http operation that failed.
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error + error.message);
      //return empty result
      return of(result as T);
    };
  }
}
