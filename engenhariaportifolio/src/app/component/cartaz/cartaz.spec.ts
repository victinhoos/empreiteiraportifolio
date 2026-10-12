import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cartaz } from './cartaz';

describe('Cartaz', () => {
  let component: Cartaz;
  let fixture: ComponentFixture<Cartaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cartaz],
    }).compileComponents();

    fixture = TestBed.createComponent(Cartaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
