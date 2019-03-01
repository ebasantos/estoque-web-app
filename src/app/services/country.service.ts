import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../classes/country'; 



@Injectable({providedIn: 'root'})
export class CountryService {

  constructor (private http: HttpClient) {
  }
  api = 'https://selfstock.herokuapp.com/api/paises'

  find() {
    return this.http.get<Country[]>('https://selfstock.herokuapp.com/api/paises');
  }

  save(country){
    this.http.post('https://selfstock.herokuapp.com/api/paises', country)
    .subscribe(dados => console.log(dados))
  }
}
