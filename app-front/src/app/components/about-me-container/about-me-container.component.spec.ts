import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeContainerComponent } from './about-me-container.component';

describe("AboutMeContainerComponent", () => {
  let component: AboutMeContainerComponent;
  let fixture: ComponentFixture<AboutMeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutMeContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should have four buttons defined", () => {
    expect(component.btns.length).toBe(4);
  });

  it("should contain a GitHub button with correct data", () => {
    const githubBtn = component.btns.find(btn => btn.name === "GitHub");

    expect(githubBtn).toBeTruthy();
    expect(githubBtn?.link).toBe("https://github.com/KauaHenriqueGoncalves");
    expect(githubBtn?.iconUrl).toContain("github-wihte.png");
  });

  it("should contain a LinkedIn button with correct link", () => {
    const linkedinBtn = component.btns.find(btn => btn.name === "Linkedln");

    expect(linkedinBtn).toBeTruthy();
    expect(linkedinBtn?.link).toContain("linkedin.com");
  });

  it("should contain a WhatsApp button with correct link", () => {
    const whatsappBtn = component.btns.find(btn => btn.name === "Whatsapp");

    expect(whatsappBtn).toBeTruthy();
    expect(whatsappBtn?.link).toContain("wa.me");
  });

  it("should contain a Curriculum button", () => {
    const curriculumBtn = component.btns.find(btn => btn.name === "Curriculum");

    expect(curriculumBtn).toBeTruthy();
    expect(curriculumBtn?.iconUrl).toContain("download-white.png");
  });
});
