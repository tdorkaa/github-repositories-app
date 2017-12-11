import { Component, OnInit } from '@angular/core';
import {IssuesService} from '../../services/issues.service';

@Component({
  selector: 'app-issues-info',
  templateUrl: './issues-info.component.html',
  styleUrls: ['./issues-info.component.css']
})
export class IssuesInfoComponent implements OnInit {
  issues;

  constructor( private issuesService: IssuesService) { }

  ngOnInit() {
    this.issuesService.issuesLoaded
      .subscribe(
        (issues) => {
          this.issues = issues;
        }
      );
  }

}
