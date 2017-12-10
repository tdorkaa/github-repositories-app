import {Component} from '@angular/core';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  repositoryName: string;

  constructor(private queryService: QueryService) {
  }

  searchRepositoryByName() {
    this.queryService.searchRepositoryByName(this.repositoryName);
  }

  onRepoNameUpdate(event: any) {
    this.repositoryName = (<HTMLInputElement>event.target).value;
  }

}
