import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositoryService} from './repository.service';
import {IssuesService} from './issues.service';

@Injectable()
export class QueryService {

  urlSearchRepositoryByOwner = 'https://api.github.com/search/repositories?q=';
  urlSearchIssuesByOwnerAndRepositoryName = 'https://api.github.com/search/issues?q=repo:';

  constructor(private httpClient: HttpClient, private repositoryService: RepositoryService, private issuesService: IssuesService) {
  }

  searchRepositoryByOwner(owner: string, name: string) {
    let found = false;
    this.httpClient.get(this.urlSearchRepositoryByOwner + name)
      .subscribe((responseData) => {
        const repositories = responseData['items'].forEach(repository => {
          if (repository.full_name === owner + '/' + name) {
            this.repositoryService.setRepository(repository);
            found = true;
          }
        });
        if (!found) {
          this.repositoryService.setRepository(undefined);
        }
      });
  }

  searchIssuesByRepositoryName(owner: string, name: string) {
    this.httpClient.get(this.urlSearchIssuesByOwnerAndRepositoryName + owner + '/' + name)
      .subscribe(
        (responseData) => {
          const issues = responseData['items'].slice(0, 4);
          this.issuesService.setIssues(issues);
        }
      );
  }
}
