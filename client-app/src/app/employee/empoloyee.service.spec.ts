import { TestBed } from '@angular/core/testing';

import { EmpoloyeeService } from './empoloyee.service';

describe('EmpoloyeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpoloyeeService = TestBed.get(EmpoloyeeService);
    expect(service).toBeTruthy();
  });
});
