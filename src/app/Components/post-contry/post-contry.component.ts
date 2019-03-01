import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-post-contry',
  templateUrl: './post-contry.component.html',
  styleUrls: ['./post-contry.component.css']
})
export class PostContryComponent{
  http: HttpClient;

  constructor(private s: CountryService){}
    
  onSubmit(country){
       this.s.save(country.value)
       alert('Usuario cadastrado com sucesso');
    }

    newCountry(){
      location.href="/newcountry"
    }
}
