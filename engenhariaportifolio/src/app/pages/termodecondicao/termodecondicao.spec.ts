import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Termodecondicao } from './termodecondicao';

describe('Termodecondicao', () => {
  let component: Termodecondicao;
  let fixture: ComponentFixture<Termodecondicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termodecondicao],
    }).compileComponents();

    fixture = TestBed.createComponent(Termodecondicao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
