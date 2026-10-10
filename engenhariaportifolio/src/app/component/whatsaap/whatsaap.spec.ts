import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Whatsaap } from './whatsaap';

describe('Whatsaap', () => {
  let component: Whatsaap;
  let fixture: ComponentFixture<Whatsaap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatsaap],
    }).compileComponents();

    fixture = TestBed.createComponent(Whatsaap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
