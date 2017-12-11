import {Component, OnInit} from '@angular/core';
import {RepositoryService} from '../../services/repository.service';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.css']
})
export class RepositoryInfoComponent implements OnInit {
  repository;

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.repositoryService.repositoryLoaded
      .subscribe(
        (repository) => {
          this.repository = repository;
        }
      );
  }
}
