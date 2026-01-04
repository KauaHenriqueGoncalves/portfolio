import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicContainerComponent } from './topic-container.component';

describe('TopicContainerComponent', () => {
  let component: TopicContainerComponent;
  let fixture: ComponentFixture<TopicContainerComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicContainerComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should have default input values", () => {
    expect(component.iconUrl).toBe("");
    expect(component.text).toBe("about some thing");
    expect(component.topic).toBe("topic");
  });

  it("should update CSS variables on mouse move", () => {
    spyOn(nativeElement, "getBoundingClientRect").and.returnValue({
      left: 10,
      top: 20,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => {}
    });

    const mouseEvent = new MouseEvent("mousemove", {
      clientX: 50,
      clientY: 70
    });

    component.onMouseMove(mouseEvent);

    const mouseX = nativeElement.style.getPropertyValue("--mouse-x");
    const mouseY = nativeElement.style.getPropertyValue("--mouse-y");

    expect(mouseX).toBe("40px");
    expect(mouseY).toBe("50px");
  });
});
