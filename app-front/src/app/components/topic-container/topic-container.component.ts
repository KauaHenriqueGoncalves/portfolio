import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-container',
  templateUrl: './topic-container.component.html',
  styleUrls: ['./topic-container.component.scss']
})
export class TopicContainerComponent {
  @Input() iconUrl: string = "";
  @Input() text: string = "about some thing";
  @Input() topic: string = "topic";

  constructor() { }
}
