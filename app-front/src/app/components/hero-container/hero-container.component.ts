import { Component } from '@angular/core';
import { CardCarouselStack } from 'src/app/interfaces/CardCarouselStack';

@Component({
  selector: 'app-hero-container',
  templateUrl: './hero-container.component.html',
  styleUrls: ['./hero-container.component.scss']
})
export class HeroContainerComponent {
  stacksOnCarousel: CardCarouselStack[] = [
    { stackImgUrl: "./../../assets/tech-stack/figma-icon.png", name: "Figma" },
    { stackImgUrl: "./../../assets/tech-stack/html-icon.png", name: "HTML" },
    { stackImgUrl: "./../../assets/tech-stack/css-icon.png", name: "CSS" },
    { stackImgUrl: "./../../assets/tech-stack/js-icon.png", name: "Javascript" },
    { stackImgUrl: "./../../assets/tech-stack/bootstrap-icon.png", name: "Bootstrap" },
    { stackImgUrl: "./../../assets/tech-stack/tailwind-css-icon.png", name: "Tailwind.css" },
    { stackImgUrl: "./../../assets/tech-stack/sass-icon.png", name: "Sass" },
    { stackImgUrl: "./../../assets/tech-stack/less-js-icon.png", name: "Less.js" },
    { stackImgUrl: "./../../assets/tech-stack/jquery-icon.png", name: "JQuery" },
    { stackImgUrl: "./../../assets/tech-stack/react-icon.png", name: "React" },
    { stackImgUrl: "./../../assets/tech-stack/angular-icon.png", name: "Angular" },
    { stackImgUrl: "./../../assets/tech-stack/typescript-icon.png", name: "Typescript" },
    { stackImgUrl: "./../../assets/tech-stack/node-js-icon.png", name: "Node.js" },
    { stackImgUrl: "./../../assets/tech-stack/express-js-icon.png", name: "Express.js" },
    { stackImgUrl: "./../../assets/tech-stack/java-icon.png", name: "Java" },
    { stackImgUrl: "./../../assets/tech-stack/spring-mvc-icon.png", name: "Spring MVC" },
    { stackImgUrl: "./../../assets/tech-stack/spring-boot-icon.png", name: "Spring Boot" },
    { stackImgUrl: "./../../assets/tech-stack/javaFX-icon.png", name: "JavaFX" },
    { stackImgUrl: "./../../assets/tech-stack/jsp-icon.png", name: "Java Server Page" },
    { stackImgUrl: "./../../assets/tech-stack/maven-icon.png", name: "Maven" },
    { stackImgUrl: "./../../assets/tech-stack/gradle-icon.png", name: "Gradle" },
    { stackImgUrl: "./../../assets/tech-stack/graalvm-icon.png", name: "GraalVM" },
    { stackImgUrl: "./../../assets/tech-stack/jwt-icon.png", name: "JWT" },
    { stackImgUrl: "./../../assets/tech-stack/git-icon.png", name: "Git" },
    { stackImgUrl: "./../../assets/tech-stack/mysql-icon.png", name: "MySQL" },
    { stackImgUrl: "./../../assets/tech-stack/postgres-icon.png", name: "Postgres" },
    { stackImgUrl: "./../../assets/tech-stack/mariadb-icon.png", name: "MariaDB" },
    { stackImgUrl: "./../../assets/tech-stack/mongodb-icon.png", name: "MongoDB" },
    { stackImgUrl: "./../../assets/tech-stack/rabbitmq-icon.png", name: "RabbitMQ" },
    { stackImgUrl: "./../../assets/tech-stack/firebase-icon.png", name: "Firebase" },
    { stackImgUrl: "./../../assets/tech-stack/vercel-icon.png", name: "Vercel" },
    { stackImgUrl: "./../../assets/tech-stack/mercado-pago-icon.png", name: "Mercado Pago" },
    { stackImgUrl: "./../../assets/tech-stack/dart-icon.png", name: "Dart" },
  ];


  constructor() { }
}
