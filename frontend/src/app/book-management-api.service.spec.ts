import { TestBed } from '@angular/core/testing';

import { BookManagementApiService } from './book-management-api.service';

describe('BookManagementApiService', () => {
  let service: BookManagementApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookManagementApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
