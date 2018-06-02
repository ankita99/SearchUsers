import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { SortByPipe } from './sort-by.pipe';
import { NgxPaginationModule } from 'ngx-pagination'; 


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RepoDetailsComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
