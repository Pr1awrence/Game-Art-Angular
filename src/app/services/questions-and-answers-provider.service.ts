import {Injectable} from '@angular/core';
import {QuestionAndAnswer} from '../question-and-answer';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAndAnswersProviderService {
  questionsAndAnswersUrl = '../../assets/database/questions-and-answers.json';

  getQuestionsAndAnswers(): Observable<QuestionAndAnswer[]> {
    return this.http.get<QuestionAndAnswer[]>(this.questionsAndAnswersUrl)
      .pipe(
        catchError(this.handleError<QuestionAndAnswer[]>('getQuestionAndAnswer', null))
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
