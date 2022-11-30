import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LettersService } from './letters.service';

describe('LettersService', () => {
  let service: LettersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(LettersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('HttpTesting Controller expectOne', () => {
    it('should match request by URL Users', () => {
      service.getUser().subscribe((response) => {
        expect(response).toBe('response');
      });

      const testRequest = httpMock.expectOne(
        'https://jsonplaceholder.typicode.com/users'
      );
      expect(testRequest.request.method).toBe('GET');
      testRequest.flush('response');
    });

    it('should match request by URL Posts', () => {
      service.getPost().subscribe((response) => {
        expect(response).toBe('response');
      });

      const testRequest = httpMock.expectOne(
        'https://jsonplaceholder.typicode.com/posts'
      );
      expect(testRequest.request.method).toBe('GET');
      testRequest.flush('response');
    });
  });
});
