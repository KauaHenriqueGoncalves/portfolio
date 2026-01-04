import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderComponent } from './profile-header.component';

describe("ProfileHeaderComponent", () => {
  let component: ProfileHeaderComponent;
  let fixture: ComponentFixture<ProfileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should have default profile inputs", () => {
    expect(component.urlProfile).toBe("");
    expect(component.nameProfile).toBe("Example");
    expect(component.fieldProfile).toBe("Example");
    expect(component.location).toBe("city, State");
  });

  it("should have default btnsLink array with one item", () => {
    expect(component.btnsLink.length).toBe(1);
    expect(component.btnsLink[0].name).toBe("example");
    expect(component.btnsLink[0].link).toBe("#");
    expect(component.btnsLink[0].iconUrl).toBe("");
  });

  it("should allow setting custom profile inputs", () => {
    component.urlProfile = "https://example.com/profile.jpg";
    component.nameProfile = "John Doe";
    component.fieldProfile = "Developer";
    component.location = "New York, NY";

    expect(component.urlProfile).toBe("https://example.com/profile.jpg");
    expect(component.nameProfile).toBe("John Doe");
    expect(component.fieldProfile).toBe("Developer");
    expect(component.location).toBe("New York, NY");
  });

  it("should allow setting custom btnsLink", () => {
    component.btnsLink = [
      { name: "GitHub", link: "https://github.com", iconUrl: "github.png" },
      { name: "LinkedIn", link: "https://linkedin.com", iconUrl: "linkedin.png" }
    ];

    expect(component.btnsLink.length).toBe(2);
    expect(component.btnsLink[0].name).toBe("GitHub");
    expect(component.btnsLink[1].link).toBe("https://linkedin.com");
  });
});
