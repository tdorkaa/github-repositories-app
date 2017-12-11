import {EventEmitter} from '@angular/core';

export class IssuesService {

  issues = [];
  issuesLoaded = new EventEmitter<Array<any>>();

  setIssues(issues) {
    this.issues = issues;
    this.issuesLoaded.emit(issues);
  }

}
