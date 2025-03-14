import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contener1Component } from './contener1.component';

describe('Contener1Component', () => {
  let component: Contener1Component;
  let fixture: ComponentFixture<Contener1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contener1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contener1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
