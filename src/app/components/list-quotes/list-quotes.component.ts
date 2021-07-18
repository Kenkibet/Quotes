import { Component, OnInit } from '@angular/core';
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

  constructor(private qouteService: QuotesService) { }

  ngOnInit(): void {
    this.quotes = this.qouteService.getAllQuotes();
    console.log(this.quotes);
  }

  addQuote(){
    this.qouteService.getAllQuotes();
  }

}
