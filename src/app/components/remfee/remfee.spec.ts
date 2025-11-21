import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remfee } from './remfee';

describe('Remfee', () => {
  let component: Remfee;
  let fixture: ComponentFixture<Remfee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remfee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remfee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
