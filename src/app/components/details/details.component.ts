import { Component, OnInit, Input } from '@angular/core'
import { Quote } from 'src/app/models/quotes-class'

@Component({
  selector: 'app-details',
  template: `
    <div class="mb-3">
      <div class="row align-items-center">
        <div class="col ms-n2">
          <h4 class="mb-1">{{ quote.submitter }} added</h4>
          <p class="card-text small font-weight-bold">
            <span class="fa fa-clock-o"></span>
            <time>{{ quote.time | createdAt }} ago</time>
          </p>
        </div>
      </div>
    </div>
    <p class="mb-3 font-weight-bold">
      {{ quote.quote }}
    </p>
    <span class="float-right small text-right">
      <em>By {{ quote.author }}</em>
    </span>
  `,
  styles: [],
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quote
  constructor() {}

  ngOnInit(): void {}
}
