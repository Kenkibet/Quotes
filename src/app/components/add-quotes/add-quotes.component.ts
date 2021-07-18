import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styles: [
  ]
})
export class AddQuotesComponent implements OnInit {
  public placeholder = "Your Name..."

  public newQuote: Quote
  @Output() addNewQuote = new EventEmitter<Quote>();

  submitQuote(){
    let tempQuote = Object.assign({}, this.newQuote)
    this.addNewQuote.emit(tempQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
