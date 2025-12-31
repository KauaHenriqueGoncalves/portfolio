import { Component } from '@angular/core';
import { CardCarouselStack } from 'src/app/interfaces/CardCarouselStack';

@Component({
  selector: 'app-tech-stack-carousel',
  templateUrl: './tech-stack-carousel.component.html',
  styleUrls: ['./tech-stack-carousel.component.scss']
})
export class TechStackCarouselComponent {
  cards: CardCarouselStack[] = [
    { stackImgUrl: "./../../assets/tech-stack/java-icon.png", name: "java" },
    { stackImgUrl: "./../../assets/tech-stack/spring-boot-icon.png", name: "spring-Boot" },
    { stackImgUrl: "./../../assets/tech-stack/maven-icon.png", name: "maven" },
    { stackImgUrl: "./../../assets/tech-stack/graalvm-icon.png", name: "graalVM" },
    { stackImgUrl: "./../../assets/tech-stack/rabbitmq-icon.png", name: "rabbitMQ" },
    { stackImgUrl: "", name: "name-stack" },
    { stackImgUrl: "", name: "name-stack" },
    { stackImgUrl: "", name: "name-stack" },
    { stackImgUrl: "", name: "fimname-stack" },
  ];

  carouselCards: CardCarouselStack[] = [...this.cards, ...this.cards];

  constructor() { }
}
