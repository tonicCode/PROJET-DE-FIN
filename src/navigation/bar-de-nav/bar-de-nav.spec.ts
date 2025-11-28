import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDeNav } from './bar-de-nav';

describe('BarDeNav', () => {
  let component: BarDeNav;
  let fixture: ComponentFixture<BarDeNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarDeNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarDeNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
