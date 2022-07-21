import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyInputUiComponent } from './currency-input-ui.component';

describe('CurrencyInputUiComponent', () => {
  let component: CurrencyInputUiComponent;
  let fixture: ComponentFixture<CurrencyInputUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyInputUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyInputUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
