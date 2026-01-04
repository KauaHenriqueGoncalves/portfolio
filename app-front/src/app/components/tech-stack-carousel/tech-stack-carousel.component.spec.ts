import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackCarouselComponent } from './tech-stack-carousel.component';
import { Renderer2 } from '@angular/core';

describe("TechStackCarouselComponent", () => {
  let component: TechStackCarouselComponent;
  let fixture: ComponentFixture<TechStackCarouselComponent>;
  let renderer: Renderer2;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechStackCarouselComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TechStackCarouselComponent);
    component = fixture.componentInstance;
    renderer = fixture.componentRef.injector.get(Renderer2);
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize stackCards with default value", () => {
    expect(component.stackCards.length).toBe(1);
    expect(component.stackCards[0].name).toBe("name-stack");
  });

  it("should duplicate stackCards three times on ngOnInit", () => {
    component.stackCards = [
      { stackImgUrl: "img-1", name: "stack-1" },
      { stackImgUrl: "img-2", name: "stack-2" }
    ];

    component.ngOnInit();

    expect(component.carouselCards.length).toBe(6);
  });

  it("should set animation style on carousel element after view init", () => {
    const carousel = document.createElement("div");
    carousel.classList.add("carousel-track");

    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    carousel.appendChild(child1);
    carousel.appendChild(child2);
    document.body.appendChild(carousel);

    spyOn(renderer, "setStyle").and.callThrough();
    spyOn(renderer, "listen").and.callThrough();

    component.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledWith(
      carousel,
      "animation",
      "scroll 1.4s linear infinite"
    );

    expect(renderer.listen).toHaveBeenCalled();

    document.body.removeChild(carousel);
  });

  it("should pause animation on mouse enter", () => {
    const carousel = document.createElement("div");

    spyOn(renderer, "setStyle");

    (component as any).pauseAnimation(carousel);

    expect(renderer.setStyle).toHaveBeenCalledWith(
      carousel,
      "animation-play-state",
      "paused"
    );
  });

  it("should resume animation on mouse leave", () => {
    const carousel = document.createElement("div");

    spyOn(renderer, "setStyle");

    (component as any).resumeAnimation(carousel);

    expect(renderer.setStyle).toHaveBeenCalledWith(
      carousel,
      "animation-play-state",
      "running"
    );
  });
});