import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QueryService {

  urlSearchRepositoryByName = 'https://api.github.com/search/repositories?q=';

  constructor(private httpClient: HttpClient) { }

  searchRepositoryByName(name: string) {
    this.httpClient.get(this.urlSearchRepositoryByName + name)
      .subscribe(data => {
        // TODO write response content into repository service
      });
  }

}
