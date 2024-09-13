import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [],
  imports: [AppComponent, BrowserModule, UserListComponent],
  providers: [],
})
export class AppModule {}
