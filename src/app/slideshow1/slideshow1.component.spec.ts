import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slideshow1Component } from './slideshow1.component';

describe('Slideshow1Component', () => {
  let component: Slideshow1Component;
  let fixture: ComponentFixture<Slideshow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slideshow1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Slideshow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
