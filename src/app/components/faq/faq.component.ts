import {Component, OnInit} from '@angular/core';
import {QuestionAndAnswer} from '../../question-and-answer';
import {QuestionsAndAnswersProviderService} from '../../services/questions-and-answers-provider.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  questionsAnswers: QuestionAndAnswer[];
  filteredQuestionsAnswers: QuestionAndAnswer[];

  constructor(private questionsAnswersService: QuestionsAndAnswersProviderService) {
  }

  getQuestionsAndAnswers(): void {
    this.questionsAnswersService.getQuestionsAndAnswers().subscribe(answer => {
      this.questionsAnswers = answer;
      this.filteredQuestionsAnswers = this.questionsAnswers;
    });
  }

  ngOnInit() {
    this.getQuestionsAndAnswers();
  }

  faqSearch(search: string): void {
    const regex = new RegExp('\\b' + search, 'i');
    this.filteredQuestionsAnswers = this.filteredQuestionsAnswers.filter(el => {
      return el.question.match(regex) !== null || el.answer.match(regex) !== null;
    });
  }

  turnBack(): void {
    (<HTMLInputElement>document.getElementById('search-input')).value = '';
    this.filteredQuestionsAnswers = this.questionsAnswers;
  }

}
