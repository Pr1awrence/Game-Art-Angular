import { TestBed } from '@angular/core/testing';

import { GameProviderService } from './game-provider.service';

describe('GameProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameProviderService = TestBed.get(GameProviderService);
    expect(service).toBeTruthy();
  });
});
