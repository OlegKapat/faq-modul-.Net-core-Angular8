import { TestBed } from '@angular/core/testing';

import { AnswerresolverService } from './answerresolver.service';

describe('AnswerresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnswerresolverService = TestBed.get(AnswerresolverService);
    expect(service).toBeTruthy();
  });
});
