import { Component } from '@angular/core';
import { NavItemOnPage } from './interfaces/NavItemOnPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItens: NavItemOnPage[] = [
    { name: "home", iconUrl: "./assets/icons/home.png", color: "#4F46E5" },
    { name: "about", iconUrl: "./assets/icons/about.png", color: "#0EA5E9" },
    { name: "projects", iconUrl: "./assets/icons/project.png", color: "#22C55E" },
    { name: "contact", iconUrl: "./assets/icons/contact.png", color: "#F97316" }
  ];

  constructor() { }
}
