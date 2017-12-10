import {EventEmitter} from '@angular/core';

export class RepositoryService {

  repositoryLoaded =  new EventEmitter<Object>();
  repository: {};

  setRepository(repository) {
    this.repository = repository;
    this.repositoryLoaded.emit(this.getRepository());
  }

  getRepository() {
    return Object.assign({}, this.repository);
  }
}
