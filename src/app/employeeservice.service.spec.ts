import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employeeservice.service';

describe('EmployeeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
