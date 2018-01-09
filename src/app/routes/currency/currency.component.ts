import { CurrencyService } from './currency.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [CurrencyService]
})
export class CurrencyComponent implements OnInit {
  from;
  to;
  toCurrency;
  fromCurrency;
  amount;
  value;
  currencies;
  currenciesFromBD;
  convertedVal;
  symbol;
  saveId;
  constructor(private currency: CurrencyService) { }

  ngOnInit() {
    this.currency.getCurrencyCountryFromDatabase().subscribe((res) => {
      this.currencies = res[0]['data'];
      this.from = this.currencies.filter(currency => currency.id === this.fromCurrency ? this.fromCurrency.id : null || 'CLP')[0].id;
      this.to = this.currencies.filter(currency => currency.id === this.toCurrency ? this.toCurrency.id : null || 'ARS')[0].id;
    });
    this.currency.getCurrencies().subscribe((data) => {
      this.processCurrencyCountry(data);
    });
  }

  processCurrencyCountry = (data) => {
    let currencies = [];
    const results = JSON.parse(data['_body']).results;

    for (let i in results) {
      if (results[i].hasOwnProperty('id')) {
        currencies.push(results[i]);
      }
    }
    currencies.sort(function(a, b){
        const nameA = a.currencyName.toLowerCase(), nameB = b.currencyName.toLowerCase()
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
    });
    this.currencies = currencies;

    this.from = this.currencies.filter(currency => currency.id === this.fromCurrency ? this.fromCurrency.id : null || 'CLP')[0].id;
    this.to = this.currencies.filter(currency => currency.id === this.toCurrency ? this.toCurrency.id : null || 'ARS')[0].id;
  }

  convert = () => {
    this.currency.convert(this.from, this.to).subscribe((data) => {
      const result = JSON.parse(data['_body']);
      this.toCurrency = this.currencies.filter(currency => currency.id === this.to)[0];
      this.toCurrency.value = Object.values(result.results)[0].val;
      this.symbol = this.toCurrency.currencySymbol;
      const value = Object.values(result.results)[0].val * this.value;
      this.convertedVal = Math.round(value * 100) / 100;
      this.saveId = Object.getOwnPropertyNames(result.results)[0];
      this.save();
    },
    error => {
      this.currency.getCurrencyFromDatabase(this.from, this.to).subscribe((data: any) => {
        this.symbol = data[0].to.currencySymbol;
        const value = data[0].to.value * this.value;
        this.convertedVal = Math.round(value * 100) / 100;
      });
  });
}

  save = () => {
    this.currency.convert(this.to, this.from).subscribe((data) => {
      const result = JSON.parse(data['_body']);
      this.fromCurrency = this.currencies.filter(currency => currency.id === this.from)[0];
      this.fromCurrency.value = Object.values(result.results)[0].val;
      const swapId = `${this.toCurrency.id}_${this.fromCurrency.id}`;
      this.currency.saveConvertionVal(this.saveId, this.fromCurrency, this.toCurrency);
      this.currency.saveConvertionVal(swapId, this.toCurrency, this.fromCurrency);
      let currenciesArr = [];
      currenciesArr.push(this.toCurrency);
      currenciesArr.push(this.fromCurrency);
      this.currency.saveCurrencies(currenciesArr);
    });
  }

  switch = () => {
    const aux = this.from;
    this.from = this.to;
    this.to = aux;

    if (this.value > 0) {
      this.convert();
    }
  }
}
