import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SearchBoxComponent} from './components/search-box/search-box.component';
import {QueryService} from './services/query.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QueryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
