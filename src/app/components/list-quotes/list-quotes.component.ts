import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styles: [
  ]
})

export class ListQuotesComponent implements OnInit {

  quotes:Quote[]

  @Output() thisEvent = new EventEmitter<string>();

  constructor(private qouteService: QuotesService) { }

  ngOnInit(): void {
    this.quotes = this.qouteService.getAllQuotes();
  }

  addQuote(){
    this.qouteService.getAllQuotes();
  }

}
