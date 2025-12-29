import { Component, Input } from '@angular/core';
import { NavItemOnPage } from 'src/app/interfaces/NavItemOnPage';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-on-page',
  templateUrl: './nav-on-page.component.html',
  styleUrls: ['./nav-on-page.component.scss']
})
export class NavOnPageComponent {
  @Input() navItens: NavItemOnPage[] = [
    { name: "empty", iconUrl: "", color: "red" }
  ];

  mobileMenuChecked: boolean = false;

  constructor() { }

  closeNavigationMobileClick(e: MouseEvent): void {
    const tag: HTMLElement = e.target as HTMLElement;
    const nameTag: string = tag.tagName.toLowerCase();
    const totalScreen = window.innerWidth;

    const canClose: boolean = (nameTag == "span" || nameTag == "a") && totalScreen <= environment.mobileBreaking;  

    if (!canClose) return;
     
    this.mobileMenuChecked = !this.mobileMenuChecked;
  }
}
