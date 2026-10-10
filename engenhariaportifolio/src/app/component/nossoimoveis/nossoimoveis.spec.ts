import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nossoimoveis } from './nossoimoveis';

describe('Nossoimoveis', () => {
  let component: Nossoimoveis;
  let fixture: ComponentFixture<Nossoimoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nossoimoveis],
    }).compileComponents();

    fixture = TestBed.createComponent(Nossoimoveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
