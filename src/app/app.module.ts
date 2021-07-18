import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbaComponent } from './components/navba/navba.component';
import { AddQuotesComponent } from './components/add-quotes/add-quotes.component';
import { ListQuotesComponent } from './components/list-quotes/list-quotes.component';
import { TimePipe } from './pipes/time-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbaComponent,
    AddQuotesComponent,
    ListQuotesComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
