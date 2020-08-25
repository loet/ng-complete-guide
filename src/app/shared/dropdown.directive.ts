import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef<HTMLDivElement>, private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }

  @HostListener('click') toggleOpen(eventData: Event): void {
    this.isOpen = !this.isOpen;
  }

}
