import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangePreviewComponent } from './currency-exchange-preview.component';

describe('CurrencyExchangePreviewComponent', () => {
  let component: CurrencyExchangePreviewComponent;
  let fixture: ComponentFixture<CurrencyExchangePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyExchangePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
