import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/models/quotes-class';
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
    this.quotes = this.qouteService.getAllQuotes().reverse();
  }

  addQuote(){
    this.qouteService.getAllQuotes();
  } 

  findMaxUpvote(quotes){
    this.qouteService.getHighestUpvote(quotes);
  }

}
