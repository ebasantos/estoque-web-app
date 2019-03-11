import { Component, Input } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { Pais } from 'src/app/classes/pais';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post-contry',
  templateUrl: './post-country.component.html',
  styleUrls: ['./post-country.component.css']
})
export class PostContryComponent{

  constructor(private http: HttpClient, private s: CountryService){}

  onSubmit(pais){
        this.s.save(pais.value);
        this.newCountry();
  }

    newCountry(){ ;
      location.href="/pais"
    }
}
