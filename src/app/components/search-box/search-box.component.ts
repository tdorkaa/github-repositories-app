import {Component} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  repositoryName: string;

  constructor() {
  }

  searchRepositoryByName() {
    // call to query service to be implemented
  }

  onRepoNameUpdate(event: any) {
    this.repositoryName = (<HTMLInputElement>event.target).value;
  }

}
