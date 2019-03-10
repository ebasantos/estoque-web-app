import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pais } from '../classes/pais'; 
import { Pages } from '../classes/pages';
//import { ComponentLoader } from 'ngx-bootstrap/component-loader/public_api';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({providedIn: 'root'})
export class CountryService {

  pais : Pais

  constructor (private http: HttpClient) { }
  api = 'https://selfstock.herokuapp.com/api/paises'
  // 'https://httpbin.org/post'
  // 'http://localhost:8080/api/pais'

  find(page: any) {
    return this.http.get<Pages>(this.api+"?page="+page);
  }   

  findById(id : number){
    return this.http.get<Pais>(this.api+'/'+id,httpOptions);
  }

  deleteById(id : number): any {
    return this.http.delete(this.api+'/'+id, httpOptions);
  }
 
  save(p : Pais){  

    this.pais = p ;
     this.http.post(this.api, this.pais, httpOptions)
     .subscribe(pais => {console.log(pais);
                          })
  }
}
