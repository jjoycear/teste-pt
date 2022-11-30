import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GenerateObjectComponent } from './generate-object.component';

describe('GenerateObjectComponent', () => {
  let service: GenerateObjectComponent;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],

      providers: [GenerateObjectComponent],
    });

    service = TestBed.inject(GenerateObjectComponent);

    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });
});
