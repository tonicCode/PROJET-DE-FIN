import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMembre } from './espace-membre';

describe('EspaceMembre', () => {
  let component: EspaceMembre;
  let fixture: ComponentFixture<EspaceMembre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceMembre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceMembre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
