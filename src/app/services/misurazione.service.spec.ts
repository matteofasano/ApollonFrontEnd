import { TestBed } from '@angular/core/testing';

import { MisurazioneService } from './misurazione.service';

describe('MisurazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisurazioneService = TestBed.get(MisurazioneService);
    expect(service).toBeTruthy();
  });
});
