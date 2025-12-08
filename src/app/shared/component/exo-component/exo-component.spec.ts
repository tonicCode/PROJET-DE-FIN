import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoComponent } from './exo-component';

describe('ExoComponent', () => {
  let component: ExoComponent;
  let fixture: ComponentFixture<ExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
