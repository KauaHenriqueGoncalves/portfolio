import { Component } from '@angular/core';
import { NavItemOnPage } from './interfaces/NavItemOnPage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navItens: NavItemOnPage[] = [
    { name: "home", iconUrl: "./assets/icons/home.png", color: "#22C55E" },
    { name: "about", iconUrl: "./assets/icons/about.png", color: "#22C55E" },
    { name: "projects", iconUrl: "./assets/icons/project.png", color: "#22C55E" },
    { name: "contact", iconUrl: "./assets/icons/contact.png", color: "#22C55E" }
  ];

  constructor() { }
}
