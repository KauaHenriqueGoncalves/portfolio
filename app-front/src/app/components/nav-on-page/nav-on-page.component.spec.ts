import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { NavOnPageComponent } from './nav-on-page.component';

describe('NavOnPageComponent', () => {
  let component: NavOnPageComponent;
  let fixture: ComponentFixture<NavOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOnPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize mobileMenuChecked as false", () => {
    expect(component.mobileMenuChecked).toBeFalse();
  });

  it("should toggle mobileMenuChecked when clicking on span and screen width is mobile", () => {
    spyOnProperty(window, "innerWidth").and.returnValue(environment.mobileBreaking);

    const span = document.createElement("span");
    const event = { target: span } as unknown as MouseEvent;

    component.closeNavigationMobileClick(event);

    expect(component.mobileMenuChecked).toBeTrue();
  });

  it("should toggle mobileMenuChecked when clicking on anchor and screen width is mobile", () => {
    spyOnProperty(window, "innerWidth").and.returnValue(environment.mobileBreaking);

    const anchor = document.createElement("a");
    const event = { target: anchor } as unknown as MouseEvent;

    component.closeNavigationMobileClick(event);

    expect(component.mobileMenuChecked).toBeTrue();
  });

  it("should NOT toggle mobileMenuChecked when screen width is greater than mobileBreaking", () => {
    spyOnProperty(window, "innerWidth").and.returnValue(environment.mobileBreaking + 200);

    const span = document.createElement("span");
    const event = { target: span } as unknown as MouseEvent;

    component.closeNavigationMobileClick(event);

    expect(component.mobileMenuChecked).toBeFalse();
  });

  it("should NOT toggle mobileMenuChecked when clicking on an invalid HTML tag", () => {
    spyOnProperty(window, "innerWidth").and.returnValue(environment.mobileBreaking);

    const div = document.createElement("div");
    const event = { target: div } as unknown as MouseEvent;

    component.closeNavigationMobileClick(event);

    expect(component.mobileMenuChecked).toBeFalse();
  });
});
