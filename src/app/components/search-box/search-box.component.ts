import {Component} from '@angular/core';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  ownerName: string;
  repositoryName: string;

  constructor(private queryService: QueryService) {
  }

  searchRepositoryByName() {
    this.queryService.searchRepositoryByName(this.ownerName, this.repositoryName);
  }

  onRepoNameUpdate(event: any) {
    this.repositoryName = (<HTMLInputElement>event.target).value;
  }

  onOwnerNameUpdate(event: any) {
    this.ownerName = (<HTMLInputElement>event.target).value;
  }
}
