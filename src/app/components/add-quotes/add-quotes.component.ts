import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Quote } from 'src/app/models/quotes-class'
import { QuotesService } from 'src/app/services/quotes.service'

@Component({
  selector: 'app-add-quotes',
  templateUrl: './add-quotes.component.html',
  styles: [],
})
export class AddQuotesComponent implements OnInit {
  public placeholder = 'Your Name...'

  public newQuote = new Quote(0, '', 0, 0, '', '', new Date())
  @Output() addNewQuote = new EventEmitter<Quote>()

  addQuoteToList() {
    let tempQuote = Object.assign({}, this.newQuote)
    this.addNewQuote.emit(tempQuote)
    this.addQuote(tempQuote)
  }

  constructor(private quotesService: QuotesService, private router: Router) {}

  ngOnInit(): void {}

  addQuote(quote) {
    this.quotesService.addQuote(quote)
    this.router.navigate(['/'])
  }
}
