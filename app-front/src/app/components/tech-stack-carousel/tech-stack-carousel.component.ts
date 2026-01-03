import { Component, Input, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { CardCarouselStack } from 'src/app/interfaces/CardCarouselStack';

@Component({
  selector: 'app-tech-stack-carousel',
  templateUrl: './tech-stack-carousel.component.html',
  styleUrls: ['./tech-stack-carousel.component.scss']
})
export class TechStackCarouselComponent implements OnInit, AfterViewInit {
  @Input() stackCards: CardCarouselStack[] = [
    { stackImgUrl: "stack", name: "name-stack" }
  ];

  carouselCards: CardCarouselStack[] = [...this.stackCards, ...this.stackCards];

  private removeMouseEnterListener?: () => void;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.carouselCards = [...this.stackCards, ...this.stackCards, ...this.stackCards];
  }

  ngAfterViewInit(): void {
    const carousel = document.querySelector<HTMLDivElement>(".carousel-track");

    if (!carousel) return;

    const duration: number = carousel.childNodes.length * 0.7;

    this.renderer.setStyle(
      carousel,
      'animation',
      `scroll ${duration}s linear infinite`
    );

    this.removeMouseEnterListener = this.renderer.listen(
      carousel,
      'mouseenter',
      () => this.pauseAnimation(carousel)
    );

    this.renderer.listen(
      carousel,
      'mouseleave',
      () => this.resumeAnimation(carousel)
    );
  }

  private pauseAnimation(element: HTMLElement): void {
    this.renderer.setStyle(element, 'animation-play-state', 'paused');
  }

  private resumeAnimation(element: HTMLElement): void {
    this.renderer.setStyle(element, 'animation-play-state', 'running');
  }
}
