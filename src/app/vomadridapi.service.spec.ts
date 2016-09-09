/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { VOMadridAPIService } from './vomadridapi.service';

describe('Service: Vomadridapi', () => {
  beforeEach(() => {
    addProviders([VOMadridAPIService]);
  });

  it('should ...',
    inject([VOMadridAPIService],
      (service: VOMadridAPIService) => {
        expect(service).toBeTruthy();
      }));
});
