import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminsGuard } from './admins.guard';

describe('adminsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
