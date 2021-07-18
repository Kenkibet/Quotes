import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class VoteDirective {
  @Input("upvote") upvote: boolean;
  @Input("quote") quote; 

  isActive:boolean = false;

  @HostListener("window:click") mouse(){
    if (this.quote.maxUpvote === true){
      this.isActive = true;
      this.element.nativeElement.style.backgroundColor = "#00d97e";
      this.element.nativeElement.style.color = "#ffffff";
    } else {
      this.quote.maxUpvote = false;
      this.element.nativeElement.style.backgroundColor = "#ffffff";
      this.element.nativeElement.style.color = "#000";
      this.isActive = false;
    }
  }

  constructor(private element: ElementRef) { }

}
