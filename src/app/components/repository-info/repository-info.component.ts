import {Component, OnDestroy, OnInit} from '@angular/core';
import {RepositoryService} from '../../services/repository.service';

@Component({
  selector: 'app-repository-info',
  templateUrl: './repository-info.component.html',
  styleUrls: ['./repository-info.component.css']
})
export class RepositoryInfoComponent implements OnInit, OnDestroy {
  private subscription: any;
  repository;

  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.subscription = this.repositoryService.repositoryLoaded
      .subscribe(
        (repository) => {
          this.repository = repository;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
