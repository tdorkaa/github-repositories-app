import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RepositoryInfoComponent} from './components/repository-info/repository-info.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {IssuesInfoComponent} from './components/issues-info/issues-info.component';
import {QueryService} from './services/query.service';
import {HttpClientModule} from '@angular/common/http';
import {RepositoryService} from './services/repository.service';
import {IssuesService} from './services/issues.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RepositoryInfoComponent,
        SearchBoxComponent,
        IssuesInfoComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        QueryService,
        RepositoryService,
        IssuesService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
