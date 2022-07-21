import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangeConverterComponent } from './currency-exchange-converter.component';

describe('CurrencyExchangeConverterComponent', () => {
  let component: CurrencyExchangeConverterComponent;
  let fixture: ComponentFixture<CurrencyExchangeConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangeConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
