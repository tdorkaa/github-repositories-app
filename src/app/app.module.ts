import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {QueryService} from './services/query.service';
import {HttpClientModule} from '@angular/common/http';
import {RepositoryService} from './services/repository.service';
import { RepositoryInfoComponent } from './components/repository-info/repository-info.component';
import { IssuesInfoComponent } from './components/issues-info/issues-info.component';
import {IssuesService} from './services/issues.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    RepositoryInfoComponent,
    IssuesInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QueryService, RepositoryService, IssuesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
