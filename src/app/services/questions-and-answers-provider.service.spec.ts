import { TestBed } from '@angular/core/testing';

import { QuestionsAndAnswersProviderService } from './questions-and-answers-provider.service';

describe('QuestionsAndAnswersProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionsAndAnswersProviderService = TestBed.get(QuestionsAndAnswersProviderService);
    expect(service).toBeTruthy();
  });
});
