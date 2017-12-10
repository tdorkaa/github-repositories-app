import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RepositoryService} from './repository.service';

@Injectable()
export class QueryService {

  urlSearchRepositoryByName = 'https://api.github.com/search/repositories?q=';

  constructor(private httpClient: HttpClient, private repositoryService: RepositoryService) {
  }

  searchRepositoryByName(owner: string, name: string) {
    this.httpClient.get(this.urlSearchRepositoryByName + name)
      .subscribe(responseData => {
        const repositories = responseData.items.forEach(repository => {
          if (repository.full_name === owner + '/' + name) {
            this.repositoryService.setRepository(repository);
            return;
          }
        });
        //TODO implement an error branch
        console.log('repository not found');

      });
  }

}
