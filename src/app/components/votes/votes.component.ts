import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { QuotesService } from 'src/app/services/quotes.service'

@Component({
  selector: 'app-votes',
  template: `
    <div class="row justify-content-between">
      <div class="col-md-6">
        <span class="badge bg-dark">upvotes: {{ quote.upvote }}</span>
        <span class="mx-3 badge bg-danger">
          downvotes: {{ quote.downvote }}
        </span>
      </div>
      <div class="col-md-6 text-right">
        <div class="row">
          <div class="col">
            <button
              class="btn btn-dark btn-sm btn-block w-100"
              (click)="upvote()"
            >
              Upvote
            </button>
          </div>
          <div class="col">
            <button
              class="btn btn-danger btn-sm btn-block w-100"
              (click)="downvote()"
            >
              Downvote
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class VotesComponent implements OnInit {
  @Input() quote
  @Input() quotes
  @Output() thisEvent = new EventEmitter<string>()

  upvote() {
    this.quote.upvote += 1
    this.thisEvent.emit('upvote')
  }
  downvote() {
    this.quote.downvote += 1
    this.thisEvent.emit('downvote')    
  }

  constructor(private qouteService: QuotesService) {}

  ngOnInit(): void {}  
}
