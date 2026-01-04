import { Component, OnInit } from '@angular/core';
import { NavItemOnPage } from './interfaces/NavItemOnPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navItens: NavItemOnPage[] = [
    { name: "home", iconUrl: "./assets/icons/home.png", color: "#22C55E" },
    { name: "about", iconUrl: "./assets/icons/about.png", color: "#22C55E" },
    { name: "projects", iconUrl: "./assets/icons/project.png", color: "#22C55E" },
    { name: "contact", iconUrl: "./assets/icons/contact.png", color: "#22C55E" }
  ];

  constructor() { }

  ngOnInit(): void {
    this.onObserverReveal();
  }

  onObserverReveal(): void {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, {
      threshold: 0.05
    });

    const hiddenElements = document.querySelectorAll(".reveal");
    hiddenElements.forEach((el) => observer.observe(el));
  }
}
