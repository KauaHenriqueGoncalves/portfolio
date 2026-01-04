import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TimelineStep } from 'src/app/interfaces/TimeLineStep';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  @ViewChildren("timelineItem") timelineItems!: QueryList<ElementRef>;

  observer!: IntersectionObserver;

  steps: TimelineStep[] = [
    {
      id: 1,
      title: '1. Planejamento',
      description: 'Para criar algo incrível, é preciso primeiro falar sobre os detalhes. O planejamento é essencial.',
      icon: 'fas fa-brain',
      tools: ['fas fa-code-branch', 'fas fa-book', 'fas fa-magic']
    },
    {
      id: 2,
      title: '2. Wireframe/Design',
      description: 'O wireframe é a estrutura básica do projeto. O design é a cara do projeto.',
      icon: 'fas fa-pencil-ruler',
      tools: ['fab fa-figma', 'fas fa-brain', 'fas fa-magic']
    },
    {
      id: 3,
      title: '3. Desenvolvimento',
      description: 'Aqui a mágica acontece. Transformando design em código funcional.',
      icon: 'fas fa-code',
      tools: ['fab fa-angular', 'fab fa-js', 'fas fa-terminal']
    }
  ];

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);

    this.timelineItems.forEach(item => {
      this.observer.observe(item.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
