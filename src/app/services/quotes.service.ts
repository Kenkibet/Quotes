import { Injectable } from '@angular/core'
import { Quote } from '../models/quotes-class'

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  constructor() {}

  getAllQuotes() {
    return QUOTES
  }
}

const QUOTES = [
  new Quote(
    1,
    'Be yourself; everyone else is already taken.',
    0,
    0,
    'Oscar Wilde',
    'Ken Kibet',
  ),
  new Quote(
    2,
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    0,
    0,
    'Marilyn Monroe',
    'Ken Kibet',
  ),
  new Quote(
    3,
    'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    0,
    0,
    'Albert Einstein',
    'Ken Kibet',
  ),
  new Quote(
    4,
    'So many books, so little time.',
    0,
    0,
    'Frank Zappa',
    'Ken Kibet',
  ),
  new Quote(
    5,
    'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
    0,
    0,
    'Bernard M. Baruch',
    'Ken Kibet',
  ),
  new Quote(
    6,
    'A room without books is like a body without a soul.',
    0,
    0,
    'Marcus Tullius Cicero',
    'Ken Kibet',
  ),
  new Quote(
    7,
    'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.',
    0,
    0,
    'Dr. Seuss',
    'Ken Kibet',
  ),
  new Quote(
    8,
    "You only live once, but if you do it right, once is enough.",
    0,
    0,
    'Mae West',
    'Ken Kibet',
  ),
  new Quote(
    8,
    "Be the change that you wish to see in the world.",
    0,
    0,
    'Mahatma Gandhi',
    'Ken Kibet',
  ),
]
