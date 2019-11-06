import { TestBed } from '@angular/core/testing';

import { LlamadasService } from '../services/llamadas.service';

describe('LlamadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LlamadasService = TestBed.get(LlamadasService);
    expect(service).toBeTruthy();
  });
});
