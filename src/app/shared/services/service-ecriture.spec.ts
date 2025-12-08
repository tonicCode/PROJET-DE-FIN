import { TestBed } from '@angular/core/testing';

import { ServiceEcriture } from './service-ecriture';

describe('ServiceEcriture', () => {
  let service: ServiceEcriture;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEcriture);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
