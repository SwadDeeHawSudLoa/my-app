import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contener2Component } from './contener2.component';

describe('Contener2Component', () => {
  let component: Contener2Component;
  let fixture: ComponentFixture<Contener2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contener2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contener2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
