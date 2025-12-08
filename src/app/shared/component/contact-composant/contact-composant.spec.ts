import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComposant } from './contact-composant';

describe('ContactComposant', () => {
  let component: ContactComposant;
  let fixture: ComponentFixture<ContactComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComposant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComposant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
