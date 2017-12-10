import {EventEmitter} from '@angular/core';

export class RepositoryService {

  repositoryLoaded =  new EventEmitter<Object>();
  repository: {};

  setRepository(repository) {
    this.repository = repository;
    this.repositoryLoaded.emit(this.repository);
  }
}
