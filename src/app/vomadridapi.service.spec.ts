/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { VomadridapiService } from './vomadridapi.service';

describe('Service: Vomadridapi', () => {
  beforeEach(() => {
    addProviders([VomadridapiService]);
  });

  it('should ...',
    inject([VomadridapiService],
      (service: VomadridapiService) => {
        expect(service).toBeTruthy();
      }));
});
