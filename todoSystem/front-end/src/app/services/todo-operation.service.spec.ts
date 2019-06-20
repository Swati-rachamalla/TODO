import { TestBed } from '@angular/core/testing';

import { TodoOperationService } from './todo-operation.service';

describe('TodoOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoOperationService = TestBed.get(TodoOperationService);
    expect(service).toBeTruthy();
  });
});
