import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.scss']
})
export class TopicContainerComponent {
  @Input() iconUrl: string = "";
  @Input() text: string = "about some thing";
  @Input() topic: string = "topic";

  constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.el.nativeElement.style.setProperty('--mouse-x', `${x}px`);
    this.el.nativeElement.style.setProperty('--mouse-y', `${y}px`);
  }
}
