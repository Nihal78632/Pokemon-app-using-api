import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDetailsPageComponent } from './all-details-page.component';

describe('AllDetailsPageComponent', () => {
  let component: AllDetailsPageComponent;
  let fixture: ComponentFixture<AllDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
