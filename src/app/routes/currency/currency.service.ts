import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

@Injectable()
export class CurrencyService {
  api;
  from;
  to;
  constructor(private http: Http, private storage: DataStorageService) {
    this.api = 'https://free.currencyconverterapi.com/api/v5';
  }

  getCurrencies = () => {
    return this.http.get(`${this.api}/currencies`);
  }

  saveCurrencies = (currencies) => {
    const cObject = {id: 'currencies', data: currencies };
    this.storage.putData('currencies_country', cObject);
  }

  checkifExist = (collection) => {
    return this.storage.getAllData(collection);
  }

  getCurrencyCountryFromDatabase = () => {
    return this.storage.getAllData('currencies_country');
  }

  convert = (from, to) => {
    this.from = from;
    this.to = to;
    return this.http.get(`${this.api}/convert?q=${this.from}_${this.to}`);
  }

  saveConvertionVal = (id, from, to) => {
    const currencies = {id: id, from: from, to: to };
    this.storage.putData('currencies', currencies);
  }

  getCurrencyFromDatabase = (from, to) => {
    return this.storage.getAllData('currencies', {q: 'where', key: 'id', method: '==', value: `${from}_${to}`});
  }
}
