import { Injectable } from '@angular/core';
import { QuestionAndAnswer } from '../question-and-answer';
import { QUESTIONS_ANSWERS } from '../mock-questions-and-answers';

@Injectable({
  providedIn: 'root'
})
export class QuestionsAndAnswersProviderService {
  getQuestionsAndAnswers(): QuestionAndAnswer[] {
    return QUESTIONS_ANSWERS;
  }
  constructor() { }
}
