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

  @Input() quote;
  @Output() thisEvent = new EventEmitter<string>();

  upvote(){
    this.quote.upvote += 1;
    this.thisEvent.emit("upvote");
  }
  downvote(){
    this.quote.downvote += 1;
    this.thisEvent.emit("downvote");
  }

  constructor(private qouteService: QuotesService) { }

  ngOnInit(): void {
    this.quotes = this.qouteService.getAllQuotes();
  }

  addQuote(){
    this.qouteService.getAllQuotes();
  }

}
