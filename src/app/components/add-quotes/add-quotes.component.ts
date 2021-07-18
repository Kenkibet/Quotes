import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Quote } from 'src/app/interfaces/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styles: [
  ]
})
export class AddQuotesComponent implements OnInit {
  public placeholder = "Your Name..."

  public newQuote =new Quote();
  @Output() addNewQuote = new EventEmitter<Quote>();

  submitQuote(){
    let tempQuote = Object.assign({}, this.newQuote)
    this.addNewQuote.emit(tempQuote);
  }

  constructor(private quotesService: QuotesService, private router: Router) { }

  ngOnInit(): void {
  }

  addQuote(quote){
    this.quotesService.addQuote(quote);
    this.router.navigate(["/"]);
    
  }

}
