import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdhereToLintComponent } from './adhere-to-lint/adhere-to-lint.component';

@NgModule({
  declarations: [],
  imports: [AppComponent, BrowserModule, UserListComponent, AdhereToLintComponent],
  providers: [],
})
export class AppModule {}
