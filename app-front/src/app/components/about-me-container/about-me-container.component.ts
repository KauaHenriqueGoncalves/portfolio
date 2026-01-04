import { Component } from '@angular/core';

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: string; // Ex: classe do FontAwesome ou caminho de SVG
  tools: string[]; // Ícones menores (github, figma, etc)
}

@Component({
  selector: 'app-about-me-container',
  templateUrl: './about-me-container.component.html',
  styleUrls: ['./about-me-container.component.scss']
})
export class AboutMeContainerComponent {
  btns: { name: string, link: string, iconUrl: string }[] = [
    { name: "GitHub", link: "https://github.com/KauaHenriqueGoncalves", iconUrl: "../../../assets/icons/github-wihte.png" },
    { name: "Linkedln", link: "https://www.linkedin.com/in/kauã-gonçalves", iconUrl: "../../../assets/icons/linkedln-white.png" },
    { name: "Whatsapp", link: "https://wa.me/5581993266862", iconUrl: "../../../assets/icons/whatsapp-white.png" },
    { name: "Curriculum", link: "../../../assets/pdf/cv_KauaHenrique.pdf", iconUrl: "../../../assets/icons/download-white.png" },
  ];

  constructor() { }
}
