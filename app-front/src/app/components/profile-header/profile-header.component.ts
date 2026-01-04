import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {
  @Input() urlProfile: string = "";
  @Input() nameProfile: string = "Example";
  @Input() fieldProfile: string = "Example";
  @Input() location: string = "city, State";

  @Input() btnsLink: { name: string, link: string, iconUrl: string }[] = [
    { name: "example", link: "#", iconUrl: "" },
  ];

  constructor() { }
}
