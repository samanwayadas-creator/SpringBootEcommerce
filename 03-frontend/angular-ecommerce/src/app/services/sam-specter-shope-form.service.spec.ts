import { TestBed } from '@angular/core/testing';

import { SamSpecterShopeFormService } from './sam-specter-shope-form.service';

describe('SamSpecterShopeFormService', () => {
  let service: SamSpecterShopeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamSpecterShopeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
