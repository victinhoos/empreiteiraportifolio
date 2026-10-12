import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hubnossoimoveis } from './hubnossoimoveis';

describe('Hubnossoimoveis', () => {
  let component: Hubnossoimoveis;
  let fixture: ComponentFixture<Hubnossoimoveis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hubnossoimoveis],
    }).compileComponents();

    fixture = TestBed.createComponent(Hubnossoimoveis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
