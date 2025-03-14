import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contener3Component } from './contener3.component';

describe('Contener3Component', () => {
  let component: Contener3Component;
  let fixture: ComponentFixture<Contener3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contener3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contener3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
