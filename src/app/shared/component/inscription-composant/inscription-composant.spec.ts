import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionComposant } from './inscription-composant';

describe('InscriptionComposant', () => {
  let component: InscriptionComposant;
  let fixture: ComponentFixture<InscriptionComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionComposant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionComposant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
