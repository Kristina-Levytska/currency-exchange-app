import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangePreviewComponent } from './components/currency-exchange-preview/currency-exchange-preview.component';
import { CurrencyExchangeConverterComponent } from './components/currency-exchange-converter/currency-exchange-converter.component';



@NgModule({
  declarations: [
    CurrencyExchangePreviewComponent,
    CurrencyExchangeConverterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CurrencyExchangeModule { }
