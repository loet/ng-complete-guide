import {Component, ElementRef, AfterViewInit, OnInit, ViewChild, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-mountain',
  templateUrl: './mountain.component.html',
  styleUrls: ['./mountain.component.css']
})
export class MountainComponent implements OnInit, AfterViewInit {

  @ViewChild('mountain') imageRef: ElementRef<HTMLImageElement>;
  @ViewChild('circle') circleInputRef: ElementRef<HTMLDivElement>;

  coords = 'undefined';
  bCR: DOMRect;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.bCR = this.imageRef.nativeElement.getBoundingClientRect();
    this.circleInputRef.nativeElement.style.top = 0 + 'px';
  }

  clickOnImage(event: MouseEvent): void {
    console.log('clicked', event);

    const coordX = event.clientX - this.bCR.x;
    const coordY = event.clientY - this.bCR.y;

    this.coords = `${coordX}/${coordY}`;

    this.circleInputRef.nativeElement.style.top = coordY + 'px';
    this.circleInputRef.nativeElement.style.left = coordX + 'px';
  }

  alertCircle(): void {
    alert('Position is: ' + this.coords);
  }
}
