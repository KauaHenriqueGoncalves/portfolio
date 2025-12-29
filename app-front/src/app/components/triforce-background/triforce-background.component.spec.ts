import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriforceBackgroundComponent } from './triforce-background.component';

describe('TriforceBackgroundComponent', () => {
  let component: TriforceBackgroundComponent;
  let fixture: ComponentFixture<TriforceBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriforceBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriforceBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
